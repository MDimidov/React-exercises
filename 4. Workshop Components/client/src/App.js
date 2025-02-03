import * as userService from "./services/userService";
import { useState, useEffect } from "react";

import "./App.css";

import CreateEdit from "./components/CreateEdit";
import DeleteUser from "./components/DeleteUser";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionTable from "./components/SectionTable";
import UserDetails from "./components/UserDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showCreateUser, setShowCreteUser] = useState(false);
  const [showDeleteUserId, setShowDeleteUserId] = useState(null);

  useEffect(() => {
    userService
      .getUsers()
      .then(setUsers)
      .catch((err) => console.error("err:" + err));
  }, []);

  async function showInfoHandler(id) {
    const user = await userService.getUserById(id);

    return setSelectedUser(user);
  }

  function onCloseHandler() {
    setSelectedUser(null);
    setShowCreteUser(false);
    setShowDeleteUserId(null);
  }

  function showCreateUserForm() {
    setShowCreteUser(true);
  }

  async function createUserHandler(e) {
    // Prevent page from refresh
    e.preventDefault();

    // Get form elements
    const form = e.target.closest("form");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Create user and get the result object
    const result = await userService.createUser(data);

    // after successful creation
    if (result) {
      // Update users table without refreshing page
      setUsers((state) => [...state, result]);

      // Close modal
      onCloseHandler();
    }
  }

  function showDeleteHandler(userId) {
    return setShowDeleteUserId(userId);
  }

  async function deleteUserHandler(userId) {
    const result = await userService.deleteUser(userId);
    
    if(result) {
      onCloseHandler();
      setUsers(state => state.filter(u => u._id !== result.userId));
    }
  }

  return (
    <>
      <Header />

      {/* <!-- Main component  --> */}
      <main className="main">
        {/* <!-- Section component  --> */}
        <SectionTable
          users={users}
          showInfoHandler={showInfoHandler}
          showCreateUserForm={showCreateUserForm}
          showDeleteHandler={showDeleteHandler}
        />

        {selectedUser && (
          <UserDetails {...selectedUser} onCloseHandler={onCloseHandler} />
        )}

        {/* <!-- Create/Edit Form component  --> */}
        {showCreateUser && (
          <CreateEdit
            onCloseHandler={onCloseHandler}
            createUserHandler={createUserHandler}
          />
        )}

        {/* <!-- Delete user component  --> */}
        {showDeleteUserId && (
          <DeleteUser
            onCloseHandler={onCloseHandler}
            userId={showDeleteUserId}
            deleteUserHandler={deleteUserHandler}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
