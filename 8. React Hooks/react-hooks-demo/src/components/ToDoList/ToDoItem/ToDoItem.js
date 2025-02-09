import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { TodoContext } from "../../../contexts/TodoContext";

const baseUrl = 'http://localhost:3030/jsonstore/todo-items/';

export default function TodoItem({
    _id,
    text,
    isCompleted,
}) {
    const { setTasksRemoveHandler, setTasksToggle, tasks } = useContext(TodoContext);

    async function toggleTaskHandler(id) {
        const task = tasks.find(t => t._id === id);

        await fetch(baseUrl + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...task,
                isCompleted: !task.isCompleted
            })
        });

        setTasksToggle(id);
    }
    async function onDeleteTask(_id) {
        await fetch(baseUrl + _id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        setTasksRemoveHandler(_id);
    }
    return (
        <ListGroup.Item style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}
            action
            onClick={() => toggleTaskHandler(_id)}
        >

            <p style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{text}</p>
            <Button variant="danger" onClick={() => onDeleteTask(_id)}>x</Button>
        </ListGroup.Item>
    );
};