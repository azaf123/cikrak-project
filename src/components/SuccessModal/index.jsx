import React from 'react';
import success from '../../assets/success.png';
import { Link } from 'react-router-dom';

export const SuccessModal = ({ open, onClose }) => {
  return (
    <div
      aria-hidden="true"
      className="w-10/12 overflow-y-auto overflow-x-hidden mx-auto mt-[208px] fixed top-0 right-0 left-0 z-50 block p-6 rounded-lg shadow-lg bg-white"
    >
      <div>
        <div>
          <p className="text-center text-3xl font-bold  mb-4">
            Congratulations
          </p>
          <img src={success} alt="logo" className="h-48 mb-6 ml-auto mr-auto" />
          <h1 className="text-mx tex-sm text-center">
            Your transaction has been successfully made, please check the
            history for the latest updates.
          </h1>
          <div className="flex-auto">
            <div className="flex justify-center mt-4">
              <Link to="/">
                <button className="h-10 w-36 rounded-lg bg-red-600 text-white mr-3">
                  Go to Home
                </button>
              </Link>
              <Link to="/history">
                <button className="h-10 w-36 rounded-lg bg-lightprimary text-white">
                  Go to History
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
