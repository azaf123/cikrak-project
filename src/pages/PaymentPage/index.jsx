import React from 'react';
import { useLocation } from 'react-router-dom';
import { PaymentModal } from '../../components/PaymentModal';
import { useLoader } from "../../lib/customHooks";

export const PaymentPage = (props) => {
  const location = useLocation();
  const state = location.state;
  const showLoader = useLoader();

  return (
    <>
      {showLoader}
      <div className="bg-Blur bg-cover bg-center h-screen">
        <PaymentModal paymentData={state} />
      </div>
    </>
  );
};
