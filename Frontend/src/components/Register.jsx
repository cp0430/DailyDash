import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');  // Add error state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post(`${import.meta.env.VITE_URL}/register`, {
                username,
                email,
                password
            });
            console.log(response.data.msg); // You may want to display this message on success
        } catch (error) {
            setError(error.response?.data?.msg || "Error registering");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2>Register</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <button type="submit">Register</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}

export default Register;
