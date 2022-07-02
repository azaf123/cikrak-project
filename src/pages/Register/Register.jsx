import React from 'react'

import registerImg from '../../assets/register.jpg'

export default function Register() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={registerImg} alt="" />
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>CIKRAK</h2>
                <div className='flex flex-col py-2'>
                    <label>Name</label>
                    <input className='border p-2' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Email</label>
                    <input className='border p-2' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Phone Number</label>
                    <input className='border p-2' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type="password" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Confirm Password</label>
                    <input className='border p-2' type="password" />
                </div>
                <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign Up</button>
                <div className='flex justify-between'>
                    <p className='text-center mt-8 text-blue-500'>Already a member? Sign In</p>
                </div>
            </form>
        </div>
    </div>
  )
}
