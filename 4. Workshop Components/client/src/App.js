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
  const [showEditUser, setShowEditUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(5);
  const [totalCount, setTotalCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [criteriaQuery, setCriteriaQuery] = useState("");

  useEffect(() => {
    userService
      .getUsers(currentPage, pageLimit, searchQuery, criteriaQuery)
      .then((data) => {
        setUsers(data.users);
        setTotalCount(data.count);
      })
      .catch((err) => console.error("err:" + err));
  }, [currentPage, pageLimit, searchQuery, criteriaQuery]);

  async function showInfoHandler(id) {
    const user = await userService.getUserById(id);

    return setSelectedUser(user);
  }

  function onCloseHandler() {
    setSelectedUser(null);
    setShowCreteUser(false);
    setShowDeleteUserId(null);
    setShowEditUser(null);
  }

  function showCreateUserForm() {
    setShowCreteUser(true);
  }

  async function createUserHandler(e) {
    // Prevent currentPage from refresh
    e.preventDefault();

    // Get form elements
    const form = e.target.closest("form");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Create user and get the result object
    const result = await userService.createUser(data);

    // after successful creation
    if (result) {
      // Update users table without refreshing currentPage
      setUsers((state) => [...state, result]);

      // Close modal
      onCloseHandler();
    }
  }

  async function editUserHandler(e, userId) {
    e.preventDefault();

    const formEl = e.target.closest("form");
    const form = new FormData(formEl);
    const user = Object.fromEntries(form);

    const result = await userService.updateUser(userId, user);

    if (result) {
      setUsers((state) => state.map((u) => (u._id === userId ? result : u)));

      onCloseHandler();
    }
  }
  function showDeleteHandler(userId) {
    return setShowDeleteUserId(userId);
  }

  async function showEditUserForm(userId) {
    const user = await userService.getUserById(userId);

    setShowEditUser(user);
  }

  async function deleteUserHandler(userId) {
    const result = await userService.deleteUser(userId);

    if (result) {
      onCloseHandler();
      setUsers((state) => state.filter((u) => u._id !== result.userId));
    }
  }

  function currentPageHandler(currentPage) {
    setCurrentPage(currentPage);
  }

  function pageLimitHandler(pageLimit) {
    setPageLimit(pageLimit);
  }

  function onSearchQuery(search) {
    setSearchQuery(search);
  }

  function onCriteriaQuery(criteria) {
    setCriteriaQuery(criteria);
  }

  return (
    <>
      <Header />

      {/* <!-- Main component  --> */}
      <main className="main">
        <SectionTable
          users={users}
          showInfoHandler={showInfoHandler}
          showCreateUserForm={showCreateUserForm}
          showDeleteHandler={showDeleteHandler}
          showEditUserForm={showEditUserForm}
          currentPageHandler={currentPageHandler}
          currentPage={currentPage}
          totalCount={totalCount}
          pageLimit={pageLimit}
          pageLimitHandler={pageLimitHandler}
          onSearchQuery={onSearchQuery}
          onCriteriaQuery={onCriteriaQuery}
        />

        {selectedUser && (
          <UserDetails {...selectedUser} onCloseHandler={onCloseHandler} />
        )}

        {/* <!-- Create/Edit Form component  --> */}
        {showCreateUser && (
          <CreateEdit
            onCloseHandler={onCloseHandler}
            createOrEditUserHandler={createUserHandler}
          />
        )}

        {showEditUser && (
          <CreateEdit
            user={showEditUser}
            onCloseHandler={onCloseHandler}
            createOrEditUserHandler={editUserHandler}
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
