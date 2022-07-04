import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../../lib/customHooks';

const NotFound: React.FC = () => {
  useDocumentTitle('Not Found - Cikrak');
 
  return (
    <div className="mt-6 ml-72">
      <img className="ml-[280px] h-96" src="https://img.freepik.com/free-vector/page-found-with-people-connecting-plug-concept-illustration_114360-1888.jpg?t=st=1656914056~exp=1656914656~hmac=ff60e6d7b15ed8c33b87e3ff465816903b7a4dd2c5e60f33214f47655782550b&w=740" alt="" />
      <p className="mt-2 ml-[175px] notfound font-bold">We couldn’t find the page you were looking for. Maybe our FAQ or Community can help?</p>
      <Link to="/">
      <button className="ml-72 border w-96 rounded-xl my-4 py-3 bg-lightprimary hover:bg-greenprimary text-white">Go To Home</button>
      </Link>
    </div>
  )
}

export default NotFound;