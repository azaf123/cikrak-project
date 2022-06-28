import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import SidebarItems from "../../data/SidebarItems";
import { useSelector } from "react-redux";

function ProfileSidebar() {
  const { userData } = useSelector((state) => state.user);

  return (
    <>
      <div className="bg-light-green p-5 pt-5 w-20 md:w-64 relative duration-500">
        {/* profile area */}
        <div className="mt-4 mb-8">
          <img
            className="mx-auto my-auto w-auto md:w-24 md:h-24 rounded-full"
            src={userData.avatar}
            alt="Profile Avatar"
          />
          <div className="text-xl font-bold font-fontTitle hidden  text-main-green mt-5 text-center md:block">
            {userData.name}
          </div>
          <div className="text-sm font-bold hidden  text-main-yellow text-center md:block">
            <span className="pr-1">
              <FontAwesomeIcon icon={faStar} />
            </span>
            {userData.points} points
          </div>
        </div>

        {/* menu area */}
        <ul>
          {SidebarItems.map((menuItem, index) => (
            <>
              {/* TODO: add state for when li is hovered so that icon ikut ubah warna
               ***       add active link! (maybe use state)
               */}
              <li
                key={index}
                className="text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-mid-green"
              >
                <span className="text-lg text-center w-4 hover:text-main-green">
                  <FontAwesomeIcon icon={menuItem.icon} />
                </span>
                <span
                  className={`text-base hidden md:flex hover:text-main-green`}
                >
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
