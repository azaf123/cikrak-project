import React from "react";
import HistoryCard from "../../components/HistoryCard";
import ProfileSidebar from "../../components/ProfileSidebar";

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
          <HistoryCard
            title="Waste Disposal"
            date="4 June 2022"
            text="12kg Inorganic Waste"
          />
        </div>
      </div>
    </>
  );
}
