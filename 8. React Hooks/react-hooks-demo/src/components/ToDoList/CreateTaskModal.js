import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import useForm from '../../hooks/useForm';


export function CreateTaskModal({
    handleCloseModal,
    showModal,
    onTaskAdd,
}) {

    const { formValues, onChange, onSubmit } = useForm({task: '', isDeleted: false}, onTaskAdd);

    
    return (
        <Modal show={showModal} onHide={handleCloseModal} animation={true}>
            <Form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a new task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="text">
                        <Form.Label>Task text:</Form.Label>
                        <Form.Control onChange={onChange} value={formValues.text} type="text" name="text" placeholder="Do the dishes.." />
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