import React, { useState } from "react";
import BlueOutlineButton from "../BlueOutlineButton";
import HistoryDetails from "./HistoryDetails";

function HistoryCard(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="max-w-screen-md ml-16 mr-10 mb-5">
        <div className="border border-gray-200 bg-slate-50 rounded p-4 flex flex-col justify-between leading-normal">
          <div className="flex justify-between">
            <div className="text-main-blue font-bold text-base mb-2 ">
              {props.title}
            </div>
            <div className="text-main-blue text-sm float-right">
              {props.date}
            </div>
          </div>

          <div className="md:flex justify-between md:h-12">
            <div className="font-medium text-sm leading-none w-9/12">
              {props.text}
              <div className="font-light pt-1 text-xs text-gray-700">
                {props.subText}
              </div>
            </div>

            <div className="flex pt-3">
              <div className="md:ml-10 mr-3">
                {props.title === "Waste Disposal" && (
                  <BlueOutlineButton
                    data-testid="button-details"
                    onClick={() => setShowModal(!showModal)}
                    btnText="Details"
                  />
                )}
              </div>
              {props.title !== "Payment" && (
                <div className="hidden md:inline-block  border-l-2 border-slate-300 pl-3 w-28">
                  <p className="text-xs">
                    points
                    {props.title === "Waste Disposal" ? " earned" : " redeemed"}
                  </p>
                  <p className="text-sm font-bold">{props.points}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div data-testid="history-details">
          <HistoryDetails setShowModal={setShowModal} />
        </div>
      )}
    </>
  );
}

export default HistoryCard;
