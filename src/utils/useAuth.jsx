import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setUser } from "../redux/userSlice";

function useAuth() {
  const dispatch = useDispatch();
  let { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    const data = window.localStorage.getItem("isLoggedIn");
    if (data) {
      dispatch(login());
      console.log(data);
    }
  }, []);
  return { isLoggedIn }
}

export default useAuth;
