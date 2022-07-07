import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
    const { isLoggedIn } = useSelector((state) => state.register);
    return !isLoggedIn ? children : <Navigate to="/"/>;
}

export default PublicRoute;