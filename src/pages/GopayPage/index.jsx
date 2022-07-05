import React from 'react';
import { useLocation } from 'react-router-dom';
import { GopayModal } from '../../components/GopayModal';
import { useLoader } from "../../lib/customHooks";

export const GopayPage = (props) => {
  const location = useLocation();
  const state = location.state;
  const showLoader = useLoader();
  return (
    <>
      {showLoader}
      <div className="bg-Blur bg-cover bg-center h-screen">
        <GopayModal GopayData={state} />
      </div>
      {/* <div className="w-72 h-72 bg-greenav rounded-full blur-2xl opacity-75 ml-[-90px]"></div>
        <div className="w-72 h-72 bg-red-500 rounded-full blur-2xl opacity-75 mt-[-1000px] ml-[1300px] -z-50"></div> */}
    </>
  );
};
