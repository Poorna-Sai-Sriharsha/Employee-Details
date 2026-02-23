import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowLeft } from 'lucide-react';

const GraphView = ({ sharedData }) => {
    const navigate = useNavigate();

    const chartData = useMemo(() => {
        if (!sharedData || sharedData.length === 0) return [];

        // Sort by salary descending, take top 10
        const sorted = [...sharedData].sort((a, b) => {
            return parseInt(b.salary) - parseInt(a.salary);
        });

        const top10 = sorted.slice(0, 10).map(item => ({
            name: item.name,
            salary: parseInt(item.salary)
        }));

        return top10;
    }, [sharedData]);

    return (
        <div className="graph-container animate-fade-in">
            <div className="flex-header">
                <button className="btn btn-icon" onClick={() => navigate('/list')}>
                    <ArrowLeft size={20} /> Back to Directory
                </button>
                <h2>Top 10 Employee Salaries</h2>
            </div>

            <div className="glass-panel chart-card mt-4">
                {chartData.length > 0 ? (
                    <div style={{ width: '100%', height: 400 }}>
                        <ResponsiveContainer>
                            <BarChart
                                data={chartData}
                                margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--surface-border)" />
                                <XAxis
                                    dataKey="name"
                                    stroke="var(--text-secondary)"
                                    angle={-45}
                                    textAnchor="end"
                                    height={70}
                                />
                                <YAxis stroke="var(--text-secondary)" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--surface)', border: '1px solid var(--surface-border)', borderRadius: '8px' }}
                                    itemStyle={{ color: 'var(--primary)' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Bar dataKey="salary" fill="var(--primary)" radius={[4, 4, 0, 0]} name="Salary ($)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                ) : (
                    <div className="no-data-msg">No data available. Please load the directory list first.</div>
                )}
            </div>
        </div>
    );
};

export default GraphView;
