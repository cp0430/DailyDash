import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = sessionStorage.getItem('authorization');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    return (
        <div>
            <h1>Todo App</h1>
            {!token ? (
                <>
                    <Register />
                    <Login setToken={setToken} />
                </>
            ) : (
                <>
                    <CreateTodo />
                    <TodoList />
                </>
            )}
        </div>
    );
}

export default App;
