import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";

export function Header() {

    const { isAuthenticated, userEmail } = useContext(AuthenticationContext);
    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1><Link className="home" to="/">GamesPlay</ Link></h1>
            <nav>
                <Link to="/catalogue">All games</ Link>
                {/* <!-- Logged-in users --> */}
                {isAuthenticated && (
                    <div id="user">
                        <span>Hello, {userEmail}</span>
                        <Link to="/create-game">Create Game</ Link>
                        <Link to="/logout">Logout</ Link>
                    </div>
                )}
                {/* <!-- Guest users --> */}
                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</ Link>
                        <Link to="/register">Register</ Link>
                    </div>
                )}
            </nav>
        </header>
    );
}