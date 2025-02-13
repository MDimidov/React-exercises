import ListElement from "./components/ListElement";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from "./components/Navigation";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      name: 'Pesho',
    }
  }


  componentDidMount() {
    fetch('http://localhost:3000/data.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          tasks: data.tasks
        });
      })
  }

  onTodoClick(id) {
    this.setState({
      tasks: this.state.tasks.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t)
    })
  }

  onDeleteTask(id) {
    this.setState({
      tasks: this.state.tasks.filter(t => t.id !== id)
    })
  }

  render() {
    return (
      <>
        <Navigation />
        <p>{this.state.name}</p>
        <ListElement tasks={this.state.tasks} onTodoClick={this.onTodoClick.bind(this)} onDeleteTask={this.onDeleteTask.bind(this)} />
      </>
    );
  }
}

export default App;
