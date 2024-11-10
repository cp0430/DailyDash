import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const token = sessionStorage.getItem('authorization'); // Retrieve the token

                const response = await axios.get(`${import.meta.env.VITE_URL}/`, {
                    headers: { "authorization": `${token}` } // Include Bearer prefix
                });
                setTodos(response.data.todos);
            } catch (error) {
                alert(error.response?.data?.msg || "Error fetching todos");
            }
        };
        fetchTodos();
    }, []);

    const markAsCompleted = async (id) => {
        try {
            const token = sessionStorage.getItem('authorization'); // Retrieve the token
            const response = await axios.put('http://localhost:3000/completed', { id }, {
                headers: { "authorization": `${token}` }
            });
            setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: true } : todo));
        } catch (error) {
            alert(error.response?.data?.msexg || "Error marking todo as completed");
        }
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        Title = {todo.title} , Description = {todo.description}, {todo.completed ? "Completed" : "Incomplete"}
                        {!todo.completed && (
                            <button onClick={() => markAsCompleted(todo.id)}>
                                Mark as Completed
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
