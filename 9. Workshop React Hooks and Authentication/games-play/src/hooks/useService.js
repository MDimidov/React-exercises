import { useContext } from "react";
import { AuthenticationContext } from "../contexts/AuthenticationContext";

export function useService(serviceFactory) {
    const { token } = useContext(AuthenticationContext);

    const service = serviceFactory(token);

    return service;
}