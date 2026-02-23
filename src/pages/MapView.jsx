import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ArrowLeft } from 'lucide-react';
import L from 'leaflet';

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const cityCoordinates = {
    "Edinburgh": [55.9533, -3.1883],
    "Tokyo": [35.6762, 139.6503],
    "San Francisco": [37.7749, -122.4194],
    "New York": [40.7128, -74.0060],
    "London": [51.5074, -0.1278],
    "Sidney": [-33.8688, 151.2093], // Assuming Sydney for 'Sidney'
    "Singapore": [1.3521, 103.8198]
};

const MapView = ({ sharedData }) => {
    const navigate = useNavigate();

    const mapMarkers = useMemo(() => {
        if (!sharedData || sharedData.length === 0) return [];

        const markers = [];
        sharedData.forEach(item => {
            const coords = cityCoordinates[item.city];
            if (coords) {
                // Optionally slightly randomize coords to prevent overlap
                const jitter = () => (Math.random() - 0.5) * 0.05;
                markers.push({
                    ...item,
                    lat: coords[0] + jitter(),
                    lng: coords[1] + jitter()
                });
            }
        });
        return markers;
    }, [sharedData]);

    // Center around the world
    const center = [30.0, 0.0];

    return (
        <div className="map-container animate-fade-in">
            <div className="flex-header">
                <button className="btn btn-icon" onClick={() => navigate('/list')}>
                    <ArrowLeft size={20} /> Back to Directory
                </button>
                <h2>Employee Map Distribution</h2>
            </div>

            <div className="glass-panel map-card mt-4">
                {sharedData.length > 0 ? (
                    <div className="leaflet-wrapper" style={{ height: '500px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
                        <MapContainer center={center} zoom={2} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {mapMarkers.map((marker, idx) => (
                                <Marker key={idx} position={[marker.lat, marker.lng]}>
                                    <Popup>
                                        <strong>{marker.name}</strong><br />
                                        City: {marker.city}<br />
                                        Salary: ${parseInt(marker.salary).toLocaleString()}
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                ) : (
                    <div className="no-data-msg">No data available. Please load the directory list first.</div>
                )}
            </div>
        </div>
    );
};

export default MapView;
