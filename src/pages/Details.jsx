import React, { useRef, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import { Camera, ArrowLeft } from 'lucide-react';

const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const webcamRef = useRef(null);
    const [isCameraOpen, setIsCameraOpen] = useState(false);

    // If no object passed in state, go back to list
    const item = location.state?.item;
    if (!item) {
        navigate('/list');
        return null;
    }

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
            navigate('/photo', { state: { imageSrc, item } });
        }
    }, [webcamRef, navigate, item]);

    return (
        <div className="details-container animate-fade-in">
            <div className="flex-header">
                <button className="btn btn-icon" onClick={() => navigate('/list')}>
                    <ArrowLeft size={20} /> Back
                </button>
                <h2>Employee Details</h2>
            </div>

            <div className="glass-panel details-card">
                <div className="detail-row">
                    <span className="detail-label">S.No:</span>
                    <span className="detail-value">{item.sno}</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">ID:</span>
                    <span className="detail-value">{item.id}</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Name:</span>
                    <span className="detail-value">{item.name}</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Salary:</span>
                    <span className="detail-value">${parseInt(item.salary).toLocaleString()}</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">City:</span>
                    <span className="detail-value">{item.city}</span>
                </div>
            </div>

            {isCameraOpen ? (
                <div className="camera-container glass-panel mt-4">
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width="100%"
                        className="webcam-view"
                    />
                    <button onClick={capture} className="btn btn-primary mt-2 flex-center">
                        <Camera size={20} /> Capture Photo
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => setIsCameraOpen(true)}
                    className="btn btn-primary capture-btn mt-4 flex-center"
                >
                    <Camera size={20} /> Open Camera
                </button>
            )}
        </div>
    );
};

export default Details;
