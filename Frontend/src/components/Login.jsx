import React, { useState } from 'react';
import axios from 'axios';

function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');  // Add error state
    const [navigate] = useState(); // You need to import useNavigate from react-router-dom instead

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post(`${import.meta.env.VITE_URL}/login`, {
                username,
                password
            });
            
            // Save token in sessionStorage
            sessionStorage.setItem('authorization', response.data.token);
            
            // Set the token in the parent component's state if needed
            setToken(response.data.token);
            
            navigate('/dashboard');
        } catch (error) {
            setError(error.response?.data?.message || 'Invalid email or password');
        }
    };  

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2>Login</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            

            <button type="submit">Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}

export default Login;