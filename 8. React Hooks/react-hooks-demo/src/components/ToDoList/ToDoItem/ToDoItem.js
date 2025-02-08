import ListGroup from "react-bootstrap/esm/ListGroup";
import Button from 'react-bootstrap/Button';

export default function TodoItem({ text }) {

    return (
        <ListGroup.Item style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>

            {text}
            <Button variant="danger">x</Button>
        </ListGroup.Item>
    );
};