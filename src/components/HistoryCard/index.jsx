import React, { useState } from "react";
import BlueOutlineButton from "../BlueOutlineButton";
import HistoryDetails from "../HistoryDetails";
import HistoryData from "../../data/HistoryData";

function HistoryCard(props) {
  const [showModal, setShowModal] = useState(false);

  // const historyDetails = HistoryData.details;

  return (
    <>
      <div className="max-w-screen-md ml-16 md:ml-20 mr-10 mb-5">
        <div className="border border-gray-200 bg-slate-50 rounded p-4 flex flex-col justify-between leading-normal">
          <div className="flex justify-between">
            <div className="text-main-blue font-bold text-base mb-2 ">
              {props.title}
            </div>
            <div className="text-main-blue text-sm float-right">
              {props.date}
            </div>
          </div>

          <div className="flex justify-between">
            <div className="font-medium text-sm leading-none">{props.text}</div>
            <div className="w-60 text-gray-700">
                {/* {Object.values(historyDetails.inorganic.weightBreakdown).map(
                  (value, i) => (
                    <li className="pl-8" key={i}>
                      - {value}
                    </li>
                  )
                )} */}
              </div>
            <div className="flex justify-end">
              <div className="ml-3 md:ml-0 mr-5">
                {/* only show for waste disposal */}
                {props.title === "Waste Disposal" && (
                  <BlueOutlineButton
                    onClick={() => setShowModal(!showModal)}
                    btnText="View Details"
                  />
                )}
              </div>
              {props.title !== "Payment" && (
                <div className="border-l-2 border-slate-300 pl-3 w-28">
                  {/* for everything but payment */}
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
        <div>
          <HistoryDetails setShowModal={setShowModal} />
        </div>
      )}
    </>
  );
}

export default HistoryCard;
