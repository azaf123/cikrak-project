import React from 'react';
import { useLocation } from 'react-router-dom';
import { PaymentModal } from '../../components/PaymentModal';

export const PaymentPage = (props) => {
  const location = useLocation();
  const state = location.state;
  return (
    <>
      <div className="bg-Blur bg-cover bg-center h-screen">
        <PaymentModal paymentData={state} />
      </div>
    </>
  );
};
