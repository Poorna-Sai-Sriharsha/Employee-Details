import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';

const PhotoResult = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const imageSrc = location.state?.imageSrc;
    const item = location.state?.item;

    if (!imageSrc) {
        navigate('/list');
        return null;
    }

    return (
        <div className="photo-result-container animate-fade-in">
            <div className="flex-header">
                <button className="btn btn-icon" onClick={() => navigate('/details', { state: { item } })}>
                    <ArrowLeft size={20} /> Back to Details
                </button>
                <h2>Captured Photo</h2>
            </div>

            <div className="glass-panel photo-card mt-4">
                <img src={imageSrc} alt="Captured" className="captured-image" />
                <div className="photo-actions mt-4">
                    <button className="btn btn-primary" onClick={() => alert("Photo Save functionality mapped!")}>
                        <Save size={18} /> Save Photo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PhotoResult;
