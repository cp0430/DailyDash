import React, { useState } from 'react';

import axios from 'axios';
function CreateTodo() {
    
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = sessionStorage.getItem('authorization'); // Retrieve the token
            const response = await axios.post( `${import.meta.env.VITE_URL}/todo`, {
                id: Date.now().toString(),
                title,
                description
                 // unique ID
            }, {
                headers: { "authorization": `${token}` }
            });
            
            window.location.reload();
        } catch (error) {
            alert(error.response?.data?.msg || "Error creating todo");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Todo</h2>
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
            />
            <button type="submit">Create Todo</button>
        </form>
    );
}

export default CreateTodo;
