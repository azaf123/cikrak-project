import React from "react";
import HistoryCard from "../../components/HistoryCard";
import NavBar from "../../components/Navbar";
import ProfileSidebar from "../../components/ProfileSidebar";
import HistoryData from "../../data/HistoryData";

export default function History() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <ProfileSidebar />

        <div className="flex-1">
          <div className="text-2xl font-bold mt-14 ml-16 mb-5 text-main-blue">
            History
          </div>
          {/* history area */}
          <div className="pb-3">
            {HistoryData.map((data, index) => (
              <HistoryCard
              data-testid="history-card"
                key={index}
                title={data.type}
                date={data.date}
                text={data.mainDetails}
                points={data.details.points}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
