import React from 'react';
// import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../../lib/customHooks/index';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  useDocumentTitle('Not Found');

  return (
    <div className='flex h-screen bg-slate-300'>
      <div className='m-auto text-center'>
      <h1 className='text-3xl font-bold text-blue-900 mb-3' >Page Not Found</h1>
      <img src="https://www.scdn.co/i/404/record.svg"alt="" className='w-6/12 m-auto' />  
      <h2 className='text-xl mt-3'>Sorry, the page you are looking for is not yet available.</h2>
      <p>please go back to <a  href="/" className='p-2 text-gray-100 border-2 rounded-lg bg-blue-800 hover:bg-sky-200'>Homepage</a></p>
      </div>
      </div>
  )
}

export default NotFound;
