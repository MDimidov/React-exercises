import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/todos`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(Object.values(data));
        setIsLoading(false);
      });
  }, []);

  const toggleStatus = (task) => {
    setTodos((state) =>
      state.map((t) =>
        t._id === task._id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );

    let _id = task._id.slice(5);
    _id.length > 1 ? _id = _id[0] + 'todo_' + _id[1] : _id = task._id
    fetch(`http://localhost:3030/jsonstore/todos/` + _id, {
      method: "PUT",
      body: JSON.stringify({ _id: task._id, text: task.text , isCompleted: !task.isCompleted })
    })
      .then(response => response.json())
      .catch(error => console.error('Error: ', error));
  };

  function addTodoHandler() {
    const lastId = Number(todos[todos.length - 1]._id.slice(5));
    const text = prompt("Add new Task:");
    const task = { _id: `todo_${lastId + 1}`, text, isCompleted: false };
    setTodos((state) => [task, ...state]);
  }

  return (
    <div className="App">
      {/* <!-- Navigation header --> */}
      <Header />

      {/* <!-- Main content --> */}
      <main className="main">
        {/* <!-- Section container --> */}
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn" onClick={() => addTodoHandler({})}>
              + Add new Todo
            </button>
          </div>

          <div className="table-wrapper">
            {isLoading ? (
              <Loading />
            ) : (
              <TodoList todos={todos} toggleStatus={toggleStatus} />
            )}
          </div>
        </section>
      </main>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default App;
