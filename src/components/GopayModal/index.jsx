import React, {useState, useEffect} from 'react';
import cross from '../../assets/cross.png';
import gopay from '../../assets/gopay.png';
import qrcode from '../../assets/gopayqrcode.png';
import instructor from '../../assets/gopayInstruction.png';
import { Link, useLocation } from 'react-router-dom';

export const GopayModal = ({ ordercode }) => {
  console.log(ordercode);
  const location = useLocation();
  const [counter, setCounter] = useState(1000);
  // Third Attempts
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  
  return (
    <div className=" mx-auto  p-6 rounded-lg shadow-lg bg-white w-[60rem]">
      <div>
        <div className="form-group mb-6">
          <div className="flex justify-between items-center">
            <img src={gopay} alt="logo" className="h-8" />
            <h1 className="ml-24 text-xl font-bold">Payment Method</h1>
            <button>
              <Link to="/">
                <img className="w-4 h-4" src={cross} alt="" />
              </Link>
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="flex justify-between items-center form-group mb-6">
              <p>Total payment</p>
              <span className="text-lightprimary ml-52 "> IDR 10.000</span>
            </div>
            <div className="flex justify-between items-center form-group-inline mb-6">
              <p>Order ID</p>
              <span className="text-lightprimary ml-52">
                {location.state.ordercode}
              </span>
            </div>
            <div>
              <p>Please scan the QR code below with the Gojek application.</p>
              <img src={qrcode} alt="logo" className="h-60 ml-20 mt-2" />
              <p className="ml-[90px] mt-2">Complete the payment before</p>
              <h1 className="font-bold ml-[100px]">25 November 15:30 WITA</h1>
              <span className="text-lightprimary font-bold ml-[150px]">
                {counter} Second
              </span>
            </div>
          </div>
          <div>
            <div className="text-sm">01. Open your Gojek.</div>
            <div className="text-sm mt-4">
              02. Scan the QR code displayed on your monitor.
            </div>
            <img src={instructor} alt="logo" className="h-52" />
            <div className="text-sm mt-4">
              03. Check your payment details in the app, then tap Pay.
            </div>
            <div className="text-sm mt-4">04. Enter your PIN.</div>
            <div className="text-sm mt-4">
              05. Your transaction is complete.
            </div>
            <Link to="/success">
              <button
                type="submit"
                className=" ml-72 w-90 px-6 py-2.5 bg-lightprimary text-white font-medium text-xs leading-tight uppercase rounded
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
