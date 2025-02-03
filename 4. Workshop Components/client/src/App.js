import * as userService from "./services/userService";
import { useState, useEffect } from "react";
import "./App.css";
import CreateEdit from './components/CreateEdit';
// import DeleteUser from './components/DeleteUser';
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionTable from "./components/SectionTable";
import UserDetails from "./components/UserDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showCreateUser, setShowCreteUser] = useState(false);

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

  }

  function showCreateUserForm() {
    setShowCreteUser(true);
  }

  async function createUserHandler(e) {
    // Prevent page from refresh
    e.preventDefault();

    // Get form elements
    const form = e.target.closest('form');
    const formData = new FormData(form)
    const data = Object.fromEntries(formData);

    // Create user and get the result object
    const result = await userService.createUser(data);

    // after successful creation
    if (result) {

      // Update users table without refreshing page
      setUsers(state => [...state, result]);
      
      // Close modal 
      onCloseHandler();
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
         />

        {selectedUser && <UserDetails {...selectedUser} onCloseHandler={onCloseHandler}/>}

        {/* <!-- Create/Edit Form component  --> */}
        {showCreateUser && <CreateEdit onCloseHandler={onCloseHandler} createUserHandler={createUserHandler}/>}

        {/* <!-- Delete user component  --> */}
        {/* <DeleteUser /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
