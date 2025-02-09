import { useContext } from "react";
import { useForms } from "../../hooks/useForms";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";

export function Login() {

  const formKeys = {
    Email: 'email',
    Password: 'password',
  }

  const { onLoginSubmit } = useContext(AuthenticationContext);
  const { formValues, onChangeHandler, onSubmit } = useForms({ [formKeys.Email]: '', [formKeys.Password]: '' }, onLoginSubmit);


  return (
    <section id="login-page" className="auth">
      <form id="login" onSubmit={onSubmit}>

        <div className="container">
          <div className="brand-logo"></div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name={formKeys.Email} value={formValues[formKeys.Email]} onChange={onChangeHandler} placeholder="Sokka@gmail.com" />

          <label htmlFor="login-pass">Password:</label>
          <input type="password" id="login-password" name={formKeys.Password} value={formValues[formKeys.Password]} onChange={onChangeHandler}/>
          <input type="submit" className="btn submit" value="Login" />
          <p className="field">
            <span>If you don't have profile click <a href="#">here</a></span>
          </p>
        </div>
      </form>
    </section>
  );
}