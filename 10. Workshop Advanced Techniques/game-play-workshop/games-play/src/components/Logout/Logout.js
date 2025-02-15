import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

export function Logout() {
    const { onLogout } = useContext(AuthenticationContext);

    onLogout();
    return <Navigate to={'/'} />
}