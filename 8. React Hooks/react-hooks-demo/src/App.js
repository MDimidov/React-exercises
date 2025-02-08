
import { useState } from 'react';
import { Header } from './components/Header'
import { CreateTaskModal } from './components/ToDoList/CreateTaskModal';
import { ToDoList } from './components/ToDoList/ToDoList';

const baseUrl = 'http://localhost:3030/jsonstore/todo-items/';


function App() {
  const [showModal, setShowModal] = useState(false);

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleShowModal() {
    setShowModal(true);
  }

  async function onTaskAdd(values) {
    await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(res => res.json());

    handleCloseModal();
  }

  return (
    <div>
      <Header />

      <ToDoList handleShowModal={handleShowModal} />

      <CreateTaskModal showModal={showModal} handleCloseModal={handleCloseModal} onTaskAdd={onTaskAdd} />
    </div>
  );
}

export default App;
