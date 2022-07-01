import React from 'react';
import cross from '../../assets/cross.png';
import gopay from '../../assets/gopay.png';
import qrcode from '../../assets/gopayqrcode.png';
import instructor from '../../assets/gopayInstruction.png';
import { Link, useLocation } from 'react-router-dom';

export const GopayModal = ({ ordercode }) => {
  console.log(ordercode);
  const location = useLocation();
  console.log(location.state.ordercode);
  return (
    <div class=" mx-auto  p-6 rounded-lg shadow-lg bg-white w-[60rem]">
      <div>
        <div class="form-group mb-6">
          <div class="flex justify-between items-center">
            <img src={gopay} alt="logo" className="h-8" />
            <h1 class="ml-24 text-xl font-bold">Payment Method</h1>
            <Link to="/">
              <img class="w-4 h-4" src={cross} alt="" />
            </Link>
          </div>
        </div>
        <div class="flex justify-between">
          <div>
            <div class="flex justify-between items-center form-group mb-6">
              <p>Total payment</p>
              <span class="text-lightprimary ml-52 "> IDR 10.000</span>
            </div>
            <div class="flex justify-between items-center form-group-inline mb-6">
              <p>Order ID</p>
              <span class="text-lightprimary ml-52">
                {location.state.ordercode}
              </span>
            </div>
            <div>
              <p>Please scan the QR code below with the Gojek application.</p>
              <img src={qrcode} alt="logo" className="h-60 ml-10" />
              <p class="ml-14">Complete the payment before</p>
              <h1 class="font-bold ml-16">25 November 15:30 WITA</h1>
              <span class="text-lightprimary font-bold ml-32">15m 0s</span>
            </div>
          </div>
          <div>
            <div class="text-sm">01. Open your Gojek.</div>
            <div class="text-sm">
              02. Scan the QR code displayed on your monitor.
            </div>
            <img src={instructor} alt="logo" className="h-52" />
            <div class="text-sm">
              03. Check your payment details in the app, then tap Pay.
            </div>
            <div class="text-sm">04. Enter your PIN.</div>
            <div class="text-sm">05. Your transaction is complete.</div>
            <Link to="/success">
              <button
                type="submit"
                class=" ml-72 w-90 px-6 py-2.5 bg-lightprimary text-white font-medium text-xs leading-tight uppercase rounded
              shadow-md hover:bg-greenprimary hover:shadow-lg focus:bg-greenprimary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-greenprimary active:shadow-lg transition duration-150 ease-in-out"
                // disabled={!isFilled()}
              >
                I have already paid
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
