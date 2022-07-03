import React, { useEffect } from 'react'

import registerImg from '../../assets/register.jpg'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setRegister } from '../../redux/registerSlice';


export default function Register() {
    // use redux
    const dispatch = useDispatch();
    const registerData = useSelector((state) => state.register.registerData);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    }
    const handleChange = (e) => {
        let { name, value } = e.target;
        dispatch(setRegister({ ...registerData, [name]: value }));
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={registerImg} alt="" />
            </div>

            <div className='bg-gray-100 flex flex-col justify-center'>
                <form onSubmit={
                    handleSubmit
                } className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-4xl font-bold text-center py-6'>CIKRAK</h2>
                    <div className='flex flex-col py-2'>
                        <label>Name</label>
                        <input placeholder='Enter Name' onChange={
                            handleChange
                        } className='border p-2' type="text" name='name' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Username</label>
                        <input placeholder='Enter Username' onChange={
                            handleChange
                        } className='border p-2' type="text" name='username' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Email</label>
                        <input placeholder='Enter Email' onChange={
                            handleChange
                        } className='border p-2' type="text" name='email' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Phone Number</label>
                        <input placeholder='Enter Phone Number' onChange={
                            handleChange
                        } className='border p-2' type="text" name='phone' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input placeholder='Enter password' onChange={
                            handleChange
                        } className='border p-2' type="password" name='password' />
                    </div>
                    

                    <button type='submit'
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>

                        Register
                    </button>
                    <div className='flex justify-between'>
                        <p className='text-center mt-8 text-blue-500'>Already a member? 
                        <a href="/login">
                        Sign In
                        </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
