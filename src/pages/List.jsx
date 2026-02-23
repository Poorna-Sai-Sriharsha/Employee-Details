import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart2, MapPin, ChevronRight, Users } from 'lucide-react';

const List = ({ setSharedData }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://backend.jotish.in/backend_dev/gettabledata.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: 'test',
                        password: '123456'
                    })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();

                if (result.TABLE_DATA) {
                    let rawData = [];
                    if (Array.isArray(result.TABLE_DATA)) {
                        rawData = result.TABLE_DATA;
                    } else if (result.TABLE_DATA.data && Array.isArray(result.TABLE_DATA.data)) {
                        rawData = result.TABLE_DATA.data;
                    } else {
                        rawData = Object.values(result.TABLE_DATA);
                    }

                    // Map array of arrays to array of objects
                    const parsedData = rawData.map((row, index) => {
                        // Support both array or object structures defensively
                        if (Array.isArray(row)) {
                            return {
                                sno: index + 1,
                                name: row[0] || `Employee ${index + 1}`,
                                role: row[1] || 'Employee',
                                city: row[2] || 'Unknown',
                                id: row[3] || `${index}`,
                                date: row[4] || '',
                                // Clean the salary string to strictly numerics for charting
                                salary: row[5] ? row[5].replace(/[^0-9.-]+/g, "") : "0"
                            };
                        }
                        return row;
                    }).filter(item => item && typeof item === 'object');

                    setData(parsedData);
                    if (setSharedData) setSharedData(parsedData);
                } else {
                    setData([]);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [setSharedData]);

    const handleRowClick = (item) => {
        navigate('/details', { state: { item } });
    };

    if (loading) return <div className="loading-state">Loading data...</div>;
    if (error) return <div className="error-state">Error: {error}</div>;

    return (
        <div className="list-container animate-fade-in">
            <div className="list-header">
                <h2><Users className="icon-inline" /> Employee Directory</h2>
                <div className="action-buttons">
                    <button className="btn btn-secondary" onClick={() => navigate('/graph')}>
                        <BarChart2 size={18} /> Salaries Graph
                    </button>
                    <button className="btn btn-secondary" onClick={() => navigate('/map')}>
                        <MapPin size={18} /> Cities Map
                    </button>
                </div>
            </div>

            <div className="grid-container">
                {data.map((item, index) => (
                    <div key={index} className="glass-panel card" onClick={() => handleRowClick(item)}>
                        <div className="card-content">
                            <h3>{item.name || `Employee ${index + 1}`}</h3>
                            <p className="text-muted">{item.city || 'Unknown City'}</p>
                        </div>
                        <div className="card-action">
                            <ChevronRight size={20} color="var(--primary)" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
