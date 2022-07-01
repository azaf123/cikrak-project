import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, setUser } from "../redux/userSlice";
import { getProfile } from "./fetchApi";

// custom hook to get token
function useLogin() {
  let { isLoggedIn, userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    isLoggedIn && dispatch(setUser(getProfile()));
    console.log(userData);
  }, []);
}

export default useLogin;
