import LoadingShades from "./LoadingShades";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Table from "./Table";

export default function SectionTable({
  users,
  showInfoHandler,
  showCreateUserForm,
  showDeleteHandler,
  showEditUserForm,
  currentPageHandler,
  totalCount,
  currentPage,
  pageLimit,
  pageLimitHandler,
  onSearchQuery,
  onCriteriaQuery,
  isWaitingFetch,
  isFoundUsers,
  isFailedToFetch,
  isAnyUsers,
}) {
  return (
    <section className="card users-container">
      <SearchBar
        onSearchQuery={onSearchQuery}
        onCriteriaQuery={onCriteriaQuery}
      />

      <div className="table-wrapper">
        {/* Overlap components  */}

        {(isWaitingFetch ||
          !isFoundUsers ||
          isFailedToFetch ||
          !isAnyUsers) && (
          <LoadingShades
            isWaitingFetch={isWaitingFetch}
            isFoundUsers={isFoundUsers}
            isFailedToFetch={isFailedToFetch}
            isAnyUsers={isAnyUsers}
          />
        )}

        <Table
          users={users}
          showInfoHandler={showInfoHandler}
          showDeleteHandler={showDeleteHandler}
          showEditUserForm={showEditUserForm}
        />
      </div>
      {/* New user button  */}
      <button className="btn-add btn" onClick={showCreateUserForm}>
        Add new user
      </button>

      <Pagination
        totalCount={totalCount}
        pageLimit={pageLimit}
        currentPage={currentPage}
        currentPageHandler={currentPageHandler}
        onPageLimit={pageLimitHandler}
      />
    </section>
  );
}
