import Footer from "./components/Footer";
import Header from "./components/Header";
// import Loading from "./components/Loading";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/todos`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(Object.values(data));
      });
  }, []);

  const toggleStatus = (id) => {
    setTodos((state) =>
      state.map((t) =>
        t._id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

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
            <button className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">
            {/* <Loading /> */}

            {/* <!-- Todo list table --> */}
            <TodoList todos={todos} toggleStatus={toggleStatus} />
          </div>
        </section>
      </main>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default App;
