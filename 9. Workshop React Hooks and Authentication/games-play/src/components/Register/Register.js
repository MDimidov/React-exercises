import { useContext } from "react";
import { useForms } from "../../hooks/useForms";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import { Link } from "react-router-dom";

export function Register() {

    const { onRegisterSubmit } = useContext(AuthenticationContext);

    const { formValues, onChangeHandler, onSubmit } = useForms({ email: '', password: '', confirmPassword: '' }, onRegisterSubmit);
    return (
        <section id="register-page" className="content auth">
            <form id="register" method="POST" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={formValues.email}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={formValues.password}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirm-password"
                        value={formValues.confirmPassword}
                        onChange={onChangeHandler}
                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}