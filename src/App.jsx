import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
// redux, roots, hooks
import { login, logout } from "./redux/userSlice";
import store from "./redux/store";
import useAuth from "./lib/useAuth";
import Routing from "./routes/routes";

const App = () => {
  // const auth = useAuth();
  const dispatch = useDispatch();

  // hook to persist login & logout states
  useEffect(() => {
    const data = window.localStorage.getItem("loggedIn");
    console.log("local storage: " + data);
    if (data) {
      dispatch(login());
      console.log(data);
    } else {
      dispatch(logout());
      window.localStorage.clear();
    }
  }, []);

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

export default App;
