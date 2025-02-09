
import { useEffect, useState } from 'react';
import { Header } from './components/Header'
import { CreateTaskModal } from './components/ToDoList/CreateTaskModal';
import { ToDoList } from './components/ToDoList/ToDoList';
import { TodoContext } from './contexts/TodoContext';

const baseUrl = 'http://localhost:3030/jsonstore/todo-items/';


function App() {
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setTasks(Object.values(data));
            });
    }, []);

    function setTasksRemoveHandler(taskId) {
        setTasks(state => state.filter(s => s._id !== taskId));
    }

    function setTasksToggle(taskId) {
        setTasks(state => state.map(s => s._id === taskId ? { ...s, isCompleted: !s.isCompleted } : s));
    }
    function setTasksCreateHandler(task) {
        setTasks(state => [...state, task]);
    }

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
            .then(res => res.json())
            .then(setTasksCreateHandler);

        handleCloseModal();
    }

    return (
        <TodoContext.Provider value={{ setTasksRemoveHandler, setTasksToggle, tasks }}>
            <Header />

            <ToDoList handleShowModal={handleShowModal} tasks={tasks} />

            <CreateTaskModal
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                onTaskAdd={onTaskAdd}
                setTasksCreateHandler={setTasksCreateHandler}
            />
        </TodoContext.Provider>
    );
}

export default App;
