import { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { ListItem } from "./ListItem";

export default class ListElement extends Component {


    render() {
        return (
            <ListGroup>
                {this.props.tasks.map(t =>
                    <ListItem
                        key={t.id} {...t}
                        onTodoClick={this.props.onTodoClick}
                        onDeleteTask={this.props.onDeleteTask}
                    />)}
            </ListGroup>
        );
    }
}