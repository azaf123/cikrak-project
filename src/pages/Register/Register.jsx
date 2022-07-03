import React, { useEffect } from 'react';

import registerImg from '../../assets/register.png';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRegister } from '../../redux/registerSlice';
import Logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';

export default function Register() {
  // use redux
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.register.registerData);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  const [
    hasError = {
      name: false,
      username: false,
      email: false,
      phone: false,
      password: false,
      confirmPassword: false,
    },
    setHasError,
  ] = useState({
    name: false,
    username: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
  });

  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e) => {
    let { name, value } = e.target;
    dispatch(setRegister({ ...registerData, [name]: value }));
    //
    if (name === 'name') {
      if (value.length < 3) {
        setHasError({ ...hasError, name: true });
        setErrorMessage('Name must be at least 3 characters');
      } else {
        setHasError({ ...hasError, name: false });
        setErrorMessage('');
      }
    }
    if (name === 'username') {
      if (value.length < 3) {
        setHasError({ ...hasError, username: true });
        setErrorMessage('Username must be at least 3 characters');
      } else {
        setHasError({ ...hasError, username: false });
        setErrorMessage('');
      }
    }
    if (name === 'email') {
      if (value.length < 3) {
        setHasError({ ...hasError, email: true });
        setErrorMessage('Email must be at least 3 characters');
      } else {
        setHasError({ ...hasError, email: false });
        setErrorMessage('');
      }
    }
    if (name === 'phone') {
      if (value.length < 3) {
        setHasError({ ...hasError, phone: true });
        setErrorMessage('Phone must be at least 3 characters');
      } else {
        setHasError({ ...hasError, phone: false });
        setErrorMessage('');
      }
    }
    if (name === 'password') {
      if (value.length < 3) {
        setHasError({ ...hasError, password: true });
        setErrorMessage('Password must be at least 3 characters');
      } else {
        setHasError({ ...hasError, password: false });
        setErrorMessage('');
      }
    }
  };

  return (
    <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="h-4/5 w-4/5 mt-12 ml-24" src={registerImg} alt="" />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-white p-4"
        >
          <img src={Logo} alt="logo" className="h-16 ml-32" />
          <div className="flex flex-col py-2">
            <label>Name</label>
            <input
              placeholder="Enter Name"
              onChange={handleChange}
              className="border p-2"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Username</label>
            <input
              placeholder="Enter Username"
              onChange={handleChange}
              className="border p-2"
              type="text"
              name="username"
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input
              placeholder="Enter Email"
              onChange={handleChange}
              className="border p-2"
              type="text"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Phone Number</label>
            <input
              placeholder="Enter Phone Number"
              onChange={handleChange}
              className="border p-2"
              type="text"
              name="phone"
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              placeholder="Enter password"
              onChange={handleChange}
              className="border p-2"
              type="password"
              name="password"
            />
          </div>

          <button
            type="submit"
            className="border w-full my-4 py-2 bg-lightprimary hover:bg-greenprimary text-white"
          >
            Register
          </button>
          <div className="flex justify-between">
            <p className="text-center mt-8 text-gray-400">
              Already a member?{' '}
              <Link to="/login">
                <span className="text-lightprimary">Sign In</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
