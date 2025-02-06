import { useNavigate } from "react-router-dom";

export function About() {
    return (
        <h1>About</h1>
    );
}

export function Home() {
    return (
        <h1>Home</h1>
    );
}

export function Error404() {

    const navigate = useNavigate();

    function onReturnHandler() {
        navigate(-1);
    }

    return (
        <>
            <h1>404</h1>
            <button onClick={onReturnHandler}>Return to previous page</button>
        </>
    );
}

