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
}) {
  return (
    <section className="card users-container">
      <SearchBar />

      <div className="table-wrapper">
        {/* Overlap components  */}

        {/* <div className="loading-shade"> */}
        {/* Loading spinner  */}
        {/* <div className="spinner"></div> */}

        {/* No users added yet  */}

        {/* <div className="table-overlap"> 
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="triangle-exclamation"
                className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                ></path>
              </svg>
              <h2>There is no users yet.</h2>
            </div> */}

        {/* No content overlap component  */}

        {/* <div className="table-overlap"> 
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="triangle-exclamation"
                className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                ></path>
              </svg>
              <h2>Sorry, we couldn't find what you're looking for.</h2>
            </div> */}

        {/* On error overlap component  */}

        {/* <div className="table-overlap"> 
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="triangle-exclamation"
                className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                ></path>
              </svg>
              <h2>Failed to fetch</h2>
            </div> */}
        {/* </div> */}

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
