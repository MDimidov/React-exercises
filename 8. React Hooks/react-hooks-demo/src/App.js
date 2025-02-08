
import { useState } from 'react';
import { Header } from './components/Header'
import { CreateTaskModal } from './components/ToDoList/CreateTaskModal';
import { ToDoList } from './components/ToDoList/ToDoList';

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleShowModal() {
    setShowModal(true);
  }

  return (
    <div>
      <Header />

      <ToDoList handleShowModal={handleShowModal} />

      <CreateTaskModal showModal={showModal} handleCloseModal={handleCloseModal} />
    </div>
  );
}

export default App;
