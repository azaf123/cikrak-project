import React from "react";
import HistoryCard from "../../components/HistoryCard";
import ProfileSidebar from "../../components/ProfileSidebar";
import HistoryData from "../../data/HistoryData";

export default function History() {
  return (
    <>
      <div className="flex">
        <ProfileSidebar />
        <div className="flex-1">
          <div className="text-2xl font-bold mt-20 ml-16 mb-5 text-main-blue">
            History
          </div>

          {/* history area */}
          {HistoryData.map((data, index) => (
            <HistoryCard
              key={index}
              title={data.type}
              date={data.date}
              text={data.mainDetails}
              points={data.details.points}
            />
          ))}
        </div>
      </div>
    </>
  );
}
