import { createContext, useContext } from "react";
import { authenticationFactory } from "../services/authenticationServices";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthenticationContext = createContext();

export function AuthenticationProvider({ children }) {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authenticationFactory(auth.accessToken);

    async function onLoginSubmit(data) {
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate("/catalogue");
        } catch {
            console.log("Your email or password is wrong!");
        }
    }

    async function onRegisterSubmit(data) {
        const { confirmPassword, ...regData } = data;

        if (confirmPassword !== regData.password) {
            return;
        }

        try {
            const result = await authService.register(regData);
            setAuth(result);
            navigate("/catalogue");
        } catch {
            console.log("Sth Wrong");
        }
    }

    async function onLogout() {
        try {
            await authService.logout();
            setAuth({});
        } catch {
            console.log("Sth Wrong");
        }
    }

    const context = {
        onLoginSubmit,
        onLogout,
        onRegisterSubmit,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthenticationContext.Provider value={context}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export function useAuthenticationContext(){
    const context = useContext(AuthenticationContext);

    return context;
}