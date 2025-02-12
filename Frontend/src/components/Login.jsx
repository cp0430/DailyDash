import React, { useState } from 'react';
import axios from 'axios';
function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_URL}/login`, {
                username,
                password
            });
            
            // Save token in sessionStorage
            sessionStorage.setItem('authorization', response.data.token);
            
            // Set the token in the parent component's state if needed
            setToken(response.data.token);
            
            alert(response.data.msg);
        } catch (error) {
            alert(error.response?.data?.msg || "Login failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
        </form>
    );
}

export default Login;
