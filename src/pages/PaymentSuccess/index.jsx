import React from 'react';
import { SuccessModal } from '../../components/SuccessModal';

export const PaymentSuccess = (props) => {
  return (
    <>
      <div className="bg-Blur bg-cover bg-center h-screen">
        <SuccessModal />
      </div>
    </>
  );
};
