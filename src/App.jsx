import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
// components
import Nav from "./components/Navbar/Nav";
import NavBarAuth from "./components/Navbar/NavBarAuth";
// redux, roots, hooks
import { login, logout } from "./redux/userSlice";
import store from "./redux/store";
import Routing from "./routes/routes";

const App = () => {
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
