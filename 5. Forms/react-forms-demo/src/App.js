import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const ref = useRef("");

  const [hobbies, setHobbies] = useState({
    hiking: false,
    reading: false,
    sports: false,
    gaming: false,
    coding: false,
  });

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    age: "",
    creditCard: "",
    comment: "",
    occupation: "",
    gender: "male",
  });

  useEffect(() => {
    ref.current.value = formValues.username;
  }, [formValues.username]);

  function changeFormValuesHandler(e) {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  function onSubmitHandler(e) {
    e.preventDefault();
  }

  function onChangeHobbiesHandler(e) {
    setHobbies((state) => ({ ...state, [e.target.value]: e.target.checked }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formValues.username}
              onChange={changeFormValuesHandler}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={changeFormValuesHandler}
            />
          </div>

          <div>
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              name="age"
              id="age"
              value={formValues.age}
              onChange={changeFormValuesHandler}
            />
          </div>

          {Number(formValues.age) >= 18 && (
            <div>
              <label htmlFor="creditCard">Credit card: </label>
              <input
                type="text"
                name="creditCard"
                id="creditCard"
                value={formValues.creditCard}
                onChange={changeFormValuesHandler}
              />
            </div>
          )}

          <div>
            <label htmlFor="occupation">Occupation: </label>
            <select
              name="occupation"
              id="occupation"
              value={formValues.occupation}
              onChange={changeFormValuesHandler}
            >
              <option value="IT">IT</option>
              <option value="Engineer">Engineer</option>
              <option value="DevOps">DevOps</option>
            </select>
          </div>

          <div>
            <label htmlFor="text">Comment: </label>
            <textarea
              type="text"
              rows="2"
              cols="30"
              name="comment"
              id="comment"
              value={formValues.comment}
              onChange={changeFormValuesHandler}
            />
          </div>

          <div>
            <p>Gender</p>
            <div>
              <label htmlFor="male">Male: </label>
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={formValues.gender === "male"}
                onChange={changeFormValuesHandler}
              />
              <label htmlFor="male">Female: </label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={formValues.gender === "female"}
                onChange={changeFormValuesHandler}
              />
            </div>
          </div>

          <div>
            <p>Hobbies</p>
            <div>
              <label htmlFor="hiking">Hiking: </label>
              <input
                type="checkbox"
                name="hobbies"
                id="hiking"
                value="hiking"
                checked={hobbies.hiking}
                onChange={onChangeHobbiesHandler}
              />

              <label htmlFor="reading">Reading: </label>
              <input
                type="checkbox"
                name="hobbies"
                id="reading"
                value="reading"
                checked={hobbies.reading}
                onChange={onChangeHobbiesHandler}
              />

              <label htmlFor="sports">Sports: </label>
              <input
                type="checkbox"
                name="hobbies"
                id="sports"
                value="sports"
                checked={hobbies.sports}
                onChange={onChangeHobbiesHandler}
              />

              <label htmlFor="gaming">Gaming: </label>
              <input
                type="checkbox"
                name="hobbies"
                id="gaming"
                value="gaming"
                checked={hobbies.gaming}
                onChange={onChangeHobbiesHandler}
              />

              <label htmlFor="coding">Coding: </label>
              <input
                type="checkbox"
                name="hobbies"
                id="coding"
                value="coding"
                checked={hobbies.coding}
                onChange={onChangeHobbiesHandler}
              />
            </div>
          </div>

          <div>
            <input type="submit" />
          </div>

          <div>
            <label htmlFor="uncontrolled">Uncontrolled</label>
            <input
              type="text"
              name="uncontrolled"
              id="uncontrolled"
              ref={ref}
            />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
