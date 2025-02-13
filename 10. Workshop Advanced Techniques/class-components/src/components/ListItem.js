import { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";

export class ListItem extends Component {
    render() {
        return (
            <ListGroup.Item>
                <span onClick={() => this.props.onTodoClick(this.props.id)} style={{textDecoration: this.props.isCompleted ? 'line-through' : ''}}>
                    {this.props.taskName}
                </span>
                <Button variant="danger" onClick={() => this.props.onDeleteTask(this.props.id)}>Delete</Button>
            </ListGroup.Item>
        );
    }
}