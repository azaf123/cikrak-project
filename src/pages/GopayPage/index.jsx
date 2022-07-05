import React from 'react';
import { useLocation } from 'react-router-dom';
import { GopayModal } from '../../components/GopayModal';
import { useLoader } from '../../lib/customHooks';

const GopayPage = (props) => {
  const location = useLocation();
  const state = location.state;
  const showLoader = useLoader();
  return (
    <>
      {showLoader}
      <div className="bg-Blur bg-cover bg-center h-screen">
        <GopayModal GopayData={state} />
      </div>
    </>
  );
};

export default GopayPage;
