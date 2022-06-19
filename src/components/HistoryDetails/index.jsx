import React from "react";
import BlueButton from "../BlueButton";

function HistoryDetails({ setShowModal }) {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-slate-200 opacity-80 fixed inset-0 z-10">
        <div className="flex h-screen justify-center items-center ">
          <div className="flex-col bg-white py-12 px-16 rounded-xl">
            <div className="flex justify-between items-start rounded border-b dark:border-gray-600">
              <h3 className="text-xl font-bold text-main-blue pb-3">
                History Details
              </h3>
            </div>
            <div className="space-y-6 w-80 py-4">
              <p className="text-base leading-relaxed text-gray-500">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
            </div>
            <div className="flex justify-end">
              <BlueButton onClick={handleClose} btnText="Close" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryDetails;
