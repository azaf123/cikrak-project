import React from 'react';
import cross from '../../assets/cross.png';
import Logo from '../../assets/logo2.png';
import gopay from '../../assets/gopay.png';
import bca from '../../assets/bca.png';
import cash from '../../assets/cash.png';
import { Link } from 'react-router-dom';

export const PaymentModal = ({ open, onClose, paymentData, props }) => {
  const wasteCode = {
    organic: 'OR',
    paper: 'PP',
    styrofoam: 'SF',
    plastic: 'PL',
    metalcans: 'MC',
  };

  const makeWasteCode = (wasteType) => {
    let code = '';
    wasteType.forEach((value, index, array) => {
      code += wasteCode[value];
    });
    return code;
  };
  console.log(paymentData.typeWaste);
  const ordercode = `${makeWasteCode(paymentData.typeWaste)}-${Math.floor(
    100000 + Math.random() * 900000
  )}`;
  return (
    <div className="cardifen py-10">
      <div className=" w-9/12 mx-auto p-6 rounded-lg shadow-lg bg-white">
        <div className="">
          <div className="form-group mb-6">
            <div className="flex justify-between items-center">
              <img src={Logo} alt="logo" className="h-12" />
              <button>
                <Link to="/">
                  <img className="w-4 h-4" src={cross} alt="" />
                </Link>
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <div>
              <div className="flex justify-between items-center form-group mb-6">
                <p>Total payment</p>
                <span className="text-lightprimary ml-52 md:mr-4">
                  IDR 10.000
                </span>
              </div>
              <div className="flex justify-between items-center form-group-inline mb-6">
                <p>Order ID</p>
                <span className="text-lightprimary ml-52 sc:ml-5 md:mr-4 lg:ml-6">
                  {ordercode}
                </span>
              </div>
              <div className="flex">
                <div className="mr-11">
                  <h1 className="text-mx">Name</h1>
                  <span>{paymentData.name}</span>
                </div>
                <div>
                  <h1 className="text-mx ml-32 sc:ml-5 lg:ml-6">
                    Phone Number
                  </h1>
                  <span className="ml-32 sc:ml-5">{paymentData.phone}</span>
                </div>
              </div>
              <div className="mt-3">
                <h1 className="text-mx">Full Address</h1>
                <div className="break-normal md:break-all md:mr-4">
                  {paymentData.address}
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link
                  to="/gopaypage"
                  state={{
                    ordercode: ordercode,
                  }}
                >
                  <div className="lg:w-96 flex justify-between items-center w-72 h-20 p-3 bg-slate-200 mb-3 rounded-md">
                    <img src={gopay} alt="gopay" className="h-5 ml-1" />
                    <h1 className="font-bold text-xl mr-5">Gopay</h1>
                  </div>
                </Link>
                <div className="lg:w-96 flex justify-between w-72 h-20 p-4 bg-slate-200 mb-3 rounded-md">
                  <img src={bca} alt="bca" className="h-9 ml-1 mt-2" />
                  <h1 className="font-bold text-xl mt-2 mr-5">m-BCA</h1>
                </div>
                <div className="lg:w-96 flex justify-between w-72 h-20 p-4 bg-slate-200 mb-3 rounded-md">
                  <img src={cash} alt="cash" className="h-12  ml-1" />
                  <h1 className="font-bold text-xl mt-2 mr-5">Cash</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
