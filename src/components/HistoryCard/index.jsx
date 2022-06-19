import React, { useState } from "react";
import BlueOutlineButton from "../BlueOutlineButton";
import HistoryDetails from "../HistoryDetails";

function HistoryCard(props) {
  // type: waste disposal, voucher purchase, points exchange
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="max-w-full ml-16 mr-10">
        <div className="border border-gray-200 bg-slate-50 rounded p-4 flex flex-col justify-between leading-normal">
          <div className="flex justify-between">
            <div className="text-main-blue font-bold text-lg mb-2 ">
              {props.title}
            </div>
            <div className="text-main-blue text-sm float-right">
              {props.date}
            </div>
          </div>

          <div className="flex justify-between">
            <div className="font-medium leading-none">{props.text}</div>

            <div className="flex justify-end">
              <div className="mr-5">
                <BlueOutlineButton
                  onClick={() => setShowModal(!showModal)}
                  btnText="View Details"
                ></BlueOutlineButton>
              </div>
              <div className="border-l-2 border-slate-300 pl-3">
                <p className="text-sm">points earned:</p>
                <p className="text-base font-bold">900 points</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div>
          <HistoryDetails setShowModal={setShowModal}/>
        </div>
      )}
    </>
  );
}

export default HistoryCard;
