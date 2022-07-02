
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function PrivateRoute({ children }){
    const { isLoggedIn } = useSelector((state) => state.user);
    return isLoggedIn ? children : <Navigate to="/"/>;
}