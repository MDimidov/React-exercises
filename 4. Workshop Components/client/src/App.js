import * as userService from "./services/userService";
import { useState, useEffect } from "react";
import "./App.css";
// import CreateEdit from './components/CreateEdit';
// import DeleteUser from './components/DeleteUser';
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionTable from "./components/SectionTable";
// import UserDetails from "./components/UserDetails";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService
      .getUsers()
      .then(setUsers)
      .catch((err) => console.error("err:" + err));
  }, []);

  return (
    <>
      <Header />

      {/* <!-- Main component  --> */}
      <main className="main">
        {/* <!-- Section component  --> */}
        <SectionTable users={users}/>

        {/* <!-- User details component  --> */}
        {/* <UserDetails /> */}

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
