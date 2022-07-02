
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function PrivateRoute({ children }){
    // TODO: cek this!
    // const data = window.localStorage.getItem("loggedIn");
    const { isLoggedIn } = useSelector((state) => state.user);
    return isLoggedIn ? children : <Navigate to="/"/>;
}