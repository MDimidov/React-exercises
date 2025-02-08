import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './ToDoItem/ToDoItem';
import Button from 'react-bootstrap/Button';

const baseUrl = 'http://localhost:3030/jsonstore/todo-items/'

export function ToDoList({
    handleShowModal,
}) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setTasks(Object.values(data));
            });
    }, []);

    return (
        <div style={{
            width: '30%',
            margin: '20px auto'
        }}>
            <ListGroup>
                {tasks.map(t => (
                    <TodoItem key={t._id} {...t} />
                ))}
            </ListGroup>

            <Button onClick={handleShowModal} variant="primary" style={{
                margin: '10px 0',
                float: 'right'
            }}>Add task</Button>
        </div>
    );
};