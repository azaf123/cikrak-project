import React, { useRef, useEffect } from 'react';
import cross from '../../assets/cross.png';
import gopay from '../../assets/gopay.png';
import qrcode from '../../assets/gopayqrcode.png';
import instructor from '../../assets/gopayInstruction.png';
import { Link, useLocation } from 'react-router-dom';

export const GopayModal = ({ ordercode }) => {
  const location = useLocation();
  const ref = useRef(null);
  // const [counter, setCounter] = React.useState(1000);
  useEffect(() => {
    let fiveMinutes = 60 * 5;
    const display = ref.current;
    startTimer(fiveMinutes, display);
  }, []);

  function startTimer(duration, display) {
    let start = Date.now(),
      diff,
      minutes,
      seconds;
    function timer() {
      // get the number of seconds that have elapsed since
      // startTimer() was called
      diff = duration - (((Date.now() - start) / 1000) | 0);

      // does the same job as parseInt truncates the float
      minutes = (diff / 60) | 0;
      seconds = diff % 60 | 0;

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      display.textContent = minutes + ':' + seconds;

      if (diff <= 0) {
        // add one second so that the count down starts at the full duration
        // example 05:00 not 04:59
        start = Date.now() + 1000;
      }
    }
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
  }

  return (
    <div className=" w-8/12 mx-auto  p-6 rounded-lg shadow-lg bg-white">
      <div>
        <div className="form-group mb-6">
          <div className="flex justify-between items-center">
            <img src={gopay} alt="logo" className="h-8" />
            <button>
              <Link to="/">
                <img className="w-4 h-4" src={cross} alt="" />
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-around">
          <div>
            <div className="flex justify-between items-center form-group mb-6">
              <p>Total payment</p>
              <span className="text-lightprimary sc:ml-5 md:mr-4 lg:ml-6">
                IDR 10.000
              </span>
            </div>
            <div className="flex justify-between items-center form-group-inline mb-6">
              <p>Order ID</p>
              <span className="text-lightprimary sc:ml-5 md:mr-4 lg:ml-6">
                {location.state.ordercode}
              </span>
            </div>
            <div>
              <p>Please scan the QR code below with the Gojek application.</p>
              <img src={qrcode} alt="logo" className="h-60 m-auto mt-2 " />
              <p className="text-center mt-2 ">Complete the payment before</p>
              <h1 className="font-bold text-center">25 November 15:30 WITA</h1>
              <body>
                <div className="text-lightprimary font-bold text-center">
                  <span id="time" ref={ref}></span> minutes!
                </div>
              </body>
            </div>
          </div>
          <div>
            <h1 className="mt-3 text-center text-xl font-bold">
              Payment Method
            </h1>
            <div className="text-sm mt-2">01. Open your Gojek.</div>
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
                className="float-right w-90 px-6 py-2.5 bg-lightprimary text-white font-medium text-xs leading-tight uppercase rounded
                shadow-md hover:bg-greenprimary hover:shadow-lg focus:bg-greenprimary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-greenprimary active:shadow-lg transition duration-150 ease-in-out mt-3"
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
