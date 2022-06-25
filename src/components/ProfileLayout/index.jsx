import React from "react";
// components
import ProfileSidebar from "../ProfileSidebar";
// third-party
import { Outlet } from "react-router-dom";

function ProfileLayout(props) {
  return (
    <>
      <div className="flex">
        <ProfileSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ProfileLayout;