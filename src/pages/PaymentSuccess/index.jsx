import React from 'react';
import Nav from '../../components/Navbar/Nav';
import { SuccessModal } from '../../components/SuccessModal';

export const PaymentSuccess = (props) => {
  return (
    <>
      <div className="bg-Blur bg-cover bg-center h-screen">
        <Nav />
        <SuccessModal />
      </div>
    </>
  );
};
