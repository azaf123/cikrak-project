import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SidebarItems from "../../const/SidebarItems";

function ProfileSidebar() {
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* TODO: duration not working */}
      <div
        className={`bg-light-green h-screen p-5 pt-5 ${
          open ? "w-72" : "w:20"
        } duration-500 relative`}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={`bg-white text-2xl rounded-full absolute -right-3 top-9 border border-light-green cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        {/* profile area */}
        {/* TODO: center */}
        <div className="place-items-center mt-4 mb-8">
          <img
            className="w-24 h-24 rounded-full"
            src="https://img.freepik.com/free-photo/asian-woman-posing-looking-camera_23-2148255359.jpg?t=st=1655398402~exp=1655399002~hmac=49552dd513a59881bd94e6dde197a76ecb808ce13543285ec2d1c9f4cd2d698c&w=740"
            alt="Profile Avatar"
          />
          <div className="text-xl font-bold text-main-green mt-5">Jane Doe</div>
          <div className="text-sm font-bold text-main-yellow">9080 Points</div>
        </div>

        {/* menu area */}
        <ul>
          {SidebarItems.map((menuItem, index) => (
            <>
              <li
                key={index}
                className="text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-mid-green"
              >
                <span className="text-lg float-left">
                  <FontAwesomeIcon icon={menuItem.icon} />
                </span>
                <span className={`text-base flex-1 ${!open && "hidden"}`}>
                  {menuItem.name}
                </span>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProfileSidebar;
