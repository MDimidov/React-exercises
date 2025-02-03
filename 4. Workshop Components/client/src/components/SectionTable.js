import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Table from "./Table";

export default function SectionTable({
  users,
  showInfoHandler,
  showCreateUserForm,
  showDeleteHandler,
  showEditUserForm,
}) {
  return (
    <section className="card users-container">
      <SearchBar />

      <Table
        users={users}
        showInfoHandler={showInfoHandler}
        showDeleteHandler={showDeleteHandler}
        showEditUserForm={showEditUserForm}
      />

      {/* New user button  */}
      <button className="btn-add btn" onClick={showCreateUserForm}>
        Add new user
      </button>

      <Pagination />
    </section>
  );
}
