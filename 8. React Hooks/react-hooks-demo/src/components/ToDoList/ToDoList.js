import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const baseUrl = 'http://localhost:3030/jsonstore/todo-items/'

function ToDoList() {
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
                    <ListGroup.Item key={t._id}>{ t.text }</ListGroup.Item>

                ))}

            </ListGroup>
        </div>
    );
}

export default ToDoList;