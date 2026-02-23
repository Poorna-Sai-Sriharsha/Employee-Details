import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'testuser' && password === 'Test123') {
            navigate('/list');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <div className="glass-panel login-panel animate-fade-in">
                <div className="login-header">
                    <div className="logo-icon">
                        <LogIn size={40} color="var(--primary)" />
                    </div>
          <h2>Welcome Back</h2>
                <p>Please enter your credentials to access the portal.</p>
            </div>

            <form onSubmit={handleLogin} className="login-form">
                {error && <div className="error-message">{error}</div>}

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        className="input-field"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="input-field"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary login-btn">
                    Sign In
                </button>
            </form>
        </div>
    </div >
  );
};

export default Login;
