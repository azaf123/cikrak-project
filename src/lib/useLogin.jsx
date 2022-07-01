import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

// custom hook to get token
function useLogin() {
  let { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    isLoggedIn && dispatch(login());
  }, []);
}

export default useLogin;
