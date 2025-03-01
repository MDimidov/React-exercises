

export default function CreateEdit({
  onCloseHandler,
  createOrEditUserHandler,
  user,
  validateFieldsHandler,
  userErrors,
}) {
  return (
    <div className="overlay">
      <div className="backdrop"></div>
      <div className="modal">
        <div className="user-container">
          <header className="headers">
            <h2>Edit User/Add User</h2>
            <button className="btn close" onClick={onCloseHandler}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="xmark"
                className="svg-inline--fa fa-xmark"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                ></path>
              </svg>
            </button>
          </header>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">{userErrors.firstName.label}</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    minLength={3}
                    value={user?.firstName}
                    onBlur={validateFieldsHandler}
                  />
                </div>
                <p className="form-error">
                  {/* First name should be at least 3 characters long! */}
                  {userErrors.firstName.error}
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">{userErrors.lastName.label}</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    minLength={3}
                    value={user?.lastName}
                    onBlur={validateFieldsHandler}
                  />
                </div>
                <p className="form-error">
                  {/* Last name should be at least 3 characters long! */}
                  {userErrors.lastName.error}
                </p>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">{userErrors.email.label}</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={user?.email}
                    onBlur={validateFieldsHandler}
                  />
                </div>
                <p className="form-error">
                  {/* Email is not valid! */}
                  {userErrors.email.error}
                  </p>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">{userErrors.phoneNumber.label}</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    value={user?.phoneNumber}
                    onBlur={validateFieldsHandler}
                  />
                </div>
                <p className="form-error">
                  {/* Phone number is not valid! */}
                  {userErrors.phoneNumber.error}
                  </p>
              </div>
            </div>

            <div className="form-group long-line">
              <label htmlFor="imageUrl">{userErrors.imageUrl.label}</label>
              <div className="input-wrapper">
                <span>
                  <i className="fa-solid fa-image"></i>
                </span>
                <input
                  id="imageUrl"
                  name="imageUrl"
                  type="text"
                  value={user?.imageUrl}
                  onBlur={validateFieldsHandler}
                  />
              </div>
              <p className="form-error">
              {/* ImageUrl is not valid! */}
              {userErrors.imageUrl.error}
                </p>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">{userErrors.country.label}</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-map"></i>
                  </span>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    minLength={2}
                    value={user?.address.country}
                    onBlur={validateFieldsHandler}
                  />
                </div>
                <p className="form-error">
                  {/* Country should be at least 2 characters long! */}
                  {userErrors.country.error}
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="city">{userErrors.city.label}</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-city"></i>
                  </span>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    minLength={3}
                    value={user?.address.city}
                    onBlur={validateFieldsHandler}
                  />
                </div>
                <p className="form-error">
                  {/* City should be at least 3 characters long! */}
                  {userErrors.city.error}
                </p>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="street">{userErrors.street.label}</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-map"></i>
                  </span>
                  <input
                    id="street"
                    name="street"
                    type="text"
                    minLength={3}
                    value={user?.address.street}
                    onBlur={validateFieldsHandler}
                  />
                </div>
                <p className="form-error">
                  {/* Street should be at least 3 characters long! */}
                  {userErrors.street.error}
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="streetNumber">{userErrors.streetNumber.label}</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-house-chimney"></i>
                  </span>
                  <input
                    id="streetNumber"
                    name="streetNumber"
                    type="text"
                    value={user?.address.streetNumber}
                    onBlur={validateFieldsHandler}
                  />
                </div>
                <p className="form-error">
                {/* Street number should be a positive number! */}
                {userErrors.streetNumber.error}
                </p>
              </div>
            </div>
            <div id="form-actions">
              <button
                id="action-save"
                className="btn"
                type="submit"
                onClick={(e) => {
                  createOrEditUserHandler(e, user?._id);           
                }}
              >
                Save
              </button>
              <button
                id="action-cancel"
                className="btn"
                type="button"
                onClick={onCloseHandler}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
