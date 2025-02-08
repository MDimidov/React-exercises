import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const baseUrl = 'http://localhost:3030/jsonstore/todo-items/';

export function CreateTaskModal({
    handleCloseModal,
    showModal,
}) {

    const [formValues, setFormValues] = useState({
        text: '',
        isCompleted: false,
    });

    function onChange(e) {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    async function onSubmit(e) {
        e.preventDefault();

        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        })
            .then(res => res.json());

        handleCloseModal();
    }
    return (
        <Modal show={showModal} onHide={handleCloseModal} animation={true}>
            <Form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a new task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="text">
                        <Form.Label>Task text:</Form.Label>
                        <Form.Control onChange={onChange} type="text" name="text" placeholder="Do the dishes.." />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};