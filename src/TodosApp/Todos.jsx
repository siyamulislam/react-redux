import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../redux/actions/todosActions';
import './Todos.css';

const Todos = () => {
    const { isLoading, todos, error } = useSelector((state) => state.todosR);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos())
    }, [dispatch]);

    console.log(todos);

    return (
        <div className="todos-container">
            <h3>Todos App</h3>
            {isLoading && <h4 style={{ color: 'green' }}>Loading...</h4>}
            {error && <h4 style={{ color: 'red' }}>{error}</h4>}
            <div className="todos-cards">
                {todos &&
                    todos.map((todo) => (
                        <div key={todo.id} className="todo-card">
                            <h4>ID: {todo.id}</h4>
                            <p>Title: {todo.title}</p>
                            <p>Complete: <span style={{ color: todo.completed ? 'green' : 'red' }}>
                                {todo.completed ? 'Yes \u2714' : 'No \u2716'}</span> </p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Todos;
