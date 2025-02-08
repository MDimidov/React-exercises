import ListGroup from "react-bootstrap/esm/ListGroup";
import Button from 'react-bootstrap/Button';

const baseUrl = 'http://localhost:3030/jsonstore/todo-items/';

export default function TodoItem({ _id,
    text,
    setTasksHandler
}) {

    async function onDeleteTask(_id) {
        await fetch(baseUrl + _id, {
            method: 'DELETE',
            header: {
                'Content-Type': 'application/json',
            }
        });

        setTasksHandler(_id);
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