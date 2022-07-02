import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import SidebarItems from "../../data/SidebarItems";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

const ProfileSidebar = () => {
  const { userData } = useSelector((state) => state.user);
  let location = useLocation();
  const dispatch = useDispatch();

  const logoutFunction = () => {
    dispatch(logout());
    window.localStorage.setItem("loggedIn", false);
  };

  return (
    <>
      <div className="bg-light-green p-5 pt-5 w-20 md:w-64 h-screen relative duration-500">
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
              <Link
                to={menuItem.link}
                onClick={() => {
                  index === 4 && logoutFunction();
                }}
              >
                <li
                  key={index}
                  className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-mid-green hover:text-main-green ${
                    location.pathname === menuItem.link
                      ? "bg-mid-green text-main-green"
                      : ""
                  }`}
                >
                  <span className="text-lg text-center w-4">
                    <FontAwesomeIcon icon={menuItem.icon} />
                  </span>
                  <span className={`text-base hidden md:flex`}>
                    {menuItem.name}
                  </span>
                </li>
              </Link>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProfileSidebar;
