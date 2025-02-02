import * as userService from "./services/userService";
import { useState, useEffect } from "react";
import "./App.css";
// import CreateEdit from './components/CreateEdit';
// import DeleteUser from './components/DeleteUser';
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionTable from "./components/SectionTable";
import UserDetails from "./components/UserDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

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

  return (
    <>
      <Header />

      {/* <!-- Main component  --> */}
      <main className="main">
        {/* <!-- Section component  --> */}
        <SectionTable users={users} showInfoHandler={showInfoHandler} />

        {/* <!-- User details component  --> */}
        {selectedUser && <UserDetails {...selectedUser} />}
    {/* Тук неще не се спредва като хората, защото получавам undefined */}

        {/* <!-- Create/Edit Form component  --> */}
        {/* <CreateEdit /> */}

        {/* <!-- Delete user component  --> */}
        {/* <DeleteUser /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
