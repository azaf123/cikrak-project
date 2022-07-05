import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function PrivateRoute({ children }){
    const { isLoggedIn } = useSelector((state) => state.register);
    return isLoggedIn ? children : <Navigate to="/"/>;
}