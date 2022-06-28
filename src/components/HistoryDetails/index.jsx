import React from "react";
import BlueButton from "../BlueButton";
import HistoryData from "../../data/HistoryData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function HistoryDetails({ setShowModal }) {
  const handleClose = () => {
    setShowModal(false);
  };

  const wasteDetails = HistoryData[0].details.wasteType;

  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-10 backdrop-opacity-10 backdrop-invert">
        <div className="flex-col bg-white py-12 px-16 rounded-xl">
          <div className="flex justify-between items-start rounded border-b dark:border-gray-600">
            <h3 className="text-xl font-bold text-main-blue pb-3">
              Waste Disposal Details
            </h3>
          </div>
          <div className="flex flex-col md:flex-row mt-10 ml-1 mr-5">
            <div className="mr-5 mb-2 w-50">
              <label className="font-medium">Date/ time of pick-up:</label>
            </div>
            <div className="w-60">
              <div className="py-1 text-gray-700 leading-none">
                {HistoryData[0].details.pickupDate}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-10 ml-1 mr-5">
            <div className="mr-5 mb-2 w-40">
              <label className="font-medium">Waste disposed:</label>
            </div>
            <ul>
              <li>{wasteDetails.organic.weight}</li>
              <li>{wasteDetails.inorganic.weight}</li>
              <div className="w-60 text-gray-700 pt-2">
                {Object.values(wasteDetails.inorganic.weightBreakdown).map(
                  (value, i) => (
                    <li className="pl-8" key={i}>
                      <span className="text-main-blue text-[8px] pr-3">
                        <FontAwesomeIcon icon={faCircle} />
                      </span>
                      {value}
                    </li>
                  )
                )}
              </div>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row mt-10 ml-1 mr-5">
            <div className="mr-5 mb-2 w-40">
              <label className="font-medium">Points earned:</label>
            </div>
            <div className="w-60">
              <div className="py-1 text-gray-700 leading-none">
                {HistoryData[0].details.points}
              </div>
            </div>
            <div className="flex justify-end pt-8">
              <BlueButton onClick={handleClose} btnText="Close" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryDetails;
