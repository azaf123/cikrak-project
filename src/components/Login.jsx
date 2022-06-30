import React, { useState } from "react";

import loginImg from "../assets/login.jpg";
import { useSelector, useDispatch } from "react-redux";
import { authorize } from "../redux/loginSlice";

export default function Login() {
  const { loginData, isLoggedIn } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [userInputs, setInputs] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    console.log(userInputs.username + userInputs.password);
    if (
      userInputs.username === loginData.username &&
      userInputs.password === loginData.password
    ) {
      console.log("dispatched");
      //TODO: dispatch not working
      dispatch(authorize());
    } else {
      console.log("ga masuk if");
    }
    e.preventDefault();

    console.log(userInputs.username + userInputs.password);
    console.log(loginData.username + loginData.password);
    console.log(isLoggedIn);
    e.target.reset();
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInputs({ ...userInputs, [name]: value });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-bold text-center py-6">CIKRAK</h2>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input
              className="border p-2"
              name="username"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-2"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
            Sign In
          </button>
          <div className="flex justify-between">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <p className="text-center mt-8 text-blue-500">
              Not a member? Sign up now
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
