import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../../components/Navbar/Nav';
import { GopayModal } from '../../components/GopayModal';

export const GopayPage = (props) => {
  const location = useLocation();
  const state = location.state;
  return (
    <>
      <div className="bg-Blur bg-cover bg-center h-screen">
        <Nav />
        <GopayModal GopayData={state} />
      </div>
      {/* <div className="w-72 h-72 bg-greenav rounded-full blur-2xl opacity-75 ml-[-90px]"></div>
        <div className="w-72 h-72 bg-red-500 rounded-full blur-2xl opacity-75 mt-[-1000px] ml-[1300px] -z-50"></div> */}
    </>
  );
};
