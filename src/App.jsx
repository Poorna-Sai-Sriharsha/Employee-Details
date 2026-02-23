import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import List from './pages/List';
import Details from './pages/Details';
import PhotoResult from './pages/PhotoResult';
import GraphView from './pages/GraphView';
import MapView from './pages/MapView';

function App() {
    const [sharedData, setSharedData] = useState([]);

    return (
        <BrowserRouter>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/list" element={<List setSharedData={setSharedData} />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/photo" element={<PhotoResult />} />
                    <Route path="/graph" element={<GraphView sharedData={sharedData} />} />
                    <Route path="/map" element={<MapView sharedData={sharedData} />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
