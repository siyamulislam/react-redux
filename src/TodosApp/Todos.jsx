import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../redux/actions/todosActions';

const Todos = () => {
    const { isLoading, todos, error } = useSelector((state) => state.todosR)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos())
    }, [dispatch]);

    console.log(todos)

    return (
        <div>
            <h3>Todos App</h3>
            {isLoading && <h4 style={{ color: 'green' }}>Loading...</h4>}
            {error && <h4 style={{ color: 'red' }}>{error}</h4>}
            <section>
                {todos && todos.map((todo) => (
                    <div key={todo.id} className="todo-card">
                        <h3>ID: {todo.id}</h3>
                        <p>Title: {todo.title}</p>
                        <p>Complete: {todo.completed ? 'Yes' : 'No'}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Todos;
