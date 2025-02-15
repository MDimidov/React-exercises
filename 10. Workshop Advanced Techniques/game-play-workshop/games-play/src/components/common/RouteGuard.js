import { Navigate, Outlet } from "react-router-dom";
import { useAuthenticationContext } from "../../contexts/AuthenticationContext";


export function RouteGuard({ children }) {
    const { isAuthenticated } = useAuthenticationContext();

    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }
    return (
        children ? children : <Outlet />
    )
}


//Method 2
// export function RouteGuard({ children }) {
//     const { isAuthenticated } = useAuthenticationContext();

//     if (!isAuthenticated) {
//         return <Navigate to='/login' />
//     }

//     return (
//         <>
//             {children}
//         </>
//     )
// }