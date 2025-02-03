import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Table from "./Table";

export default function SectionTable({ 
  users, 
  showInfoHandler,
  showCreateUserForm,
  showDeleteHandler,
 }) {
  return (
    <section className="card users-container">
      <SearchBar />

      <Table 
      users={users} 
      showInfoHandler={showInfoHandler}
      showDeleteHandler={showDeleteHandler}
      />

      {/* New user button  */}
      <button className="btn-add btn" onClick={showCreateUserForm}>Add new user</button>

      <Pagination />
    </section>
  );
}
