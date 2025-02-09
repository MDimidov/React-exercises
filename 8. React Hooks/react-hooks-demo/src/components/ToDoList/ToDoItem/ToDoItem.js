import ListGroup from "react-bootstrap/esm/ListGroup";
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { TodoContext } from "../../../contexts/TodoContext";

const baseUrl = 'http://localhost:3030/jsonstore/todo-items/';

export default function TodoItem({
    _id,
    text,
}) {
    const setTasksRemoveHandler = useContext(TodoContext);

    async function onDeleteTask(_id) {
        await fetch(baseUrl + _id, {
            method: 'DELETE',
            header: {
                'Content-Type': 'application/json',
            }
        });

        setTasksRemoveHandler(_id);
    }
    return (
        <ListGroup.Item style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>

            {text}
            <Button variant="danger" onClick={() => onDeleteTask(_id)}>x</Button>
        </ListGroup.Item>
    );
};