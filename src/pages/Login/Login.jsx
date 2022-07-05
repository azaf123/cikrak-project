import React, { useState } from 'react';
import loginImg from '../../assets/login.png';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/registerSlice';
import Logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2"; 
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  let { registerData } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const [userInputs, setInputs] = useState({ email: '', password: '' });
 
  // email / password
  const ModalError = () => {
    Swal.fire({
      title: 'Error',
      text: 'Email or password is incorrect',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
  const navigate = useNavigate();
  const navigateToLandingpage = () => {
    navigate('/');
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (userInputs.email === registerData.email ||
        userInputs.email === registerData.username) &&
      userInputs.password === registerData.password
    ) {
      dispatch(login());
      navigateToLandingpage();
     
    }
    else {
      ModalError();
    }
  
    e.target.reset();
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInputs({ ...userInputs, [name]: value });

  };
  

  return (
    <>
      <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="h-4/5 w-4/5 mt-12 ml-24" src={loginImg} alt="" />
        </div>
        <div className="bg-gray-100 flex flex-col justify-center">
          <form
            className="max-w-[400px] w-full mx-auto bg-white p-4"
            onSubmit={handleSubmit}
          >
            <img src={Logo} alt="logo" className="h-16 ml-32" />
            <div className="flex flex-col py-2">
              <label>Email or Username</label>
              <input
                className="border p-2"
                name="email"
                type="text"
                onChange={handleChange}
                placeholder="Enter Email or Username"
                
                

                
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <input
                className="border p-2"
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter Password"
              />
            </div>
            <button className="border w-full my-4 py-2 bg-lightprimary hover:bg-greenprimary text-white">
              Sign In
            </button>
            <div className="flex justify-between">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p className="text-center text-gray-400">Not a member?</p>
              <Link to="/register">
                <span className="text-lightprimary">Sign up now</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
