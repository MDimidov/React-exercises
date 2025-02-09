import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './ToDoItem/ToDoItem';
import Button from 'react-bootstrap/Button';

export function ToDoList({
    tasks,
    handleShowModal,
}) {
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