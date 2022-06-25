import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarItems from "../../data/SidebarItems";

function ProfileSidebar() {
  return (
    <>
      <div className="bg-light-green h-screen p-5 pt-5 w-20 md:w-72 relative duration-300">
        {/* profile area */}
        <div className="mt-4 mb-8">
          <img
            className="mx-auto my-auto w-auto md:w-24 md:h-24 rounded-full"
            src="https://img.freepik.com/free-photo/asian-woman-posing-looking-camera_23-2148255359.jpg?t=st=1655398402~exp=1655399002~hmac=49552dd513a59881bd94e6dde197a76ecb808ce13543285ec2d1c9f4cd2d698c&w=740"
            alt="Profile Avatar"
          />
          <div className="text-xl font-bold hidden  text-main-green mt-5 text-center md:block">
            Jane Doe
          </div>
          <div className="text-sm font-bold hidden  text-main-yellow text-center md:block">
            9080 Points
          </div>
        </div>

        {/* menu area */}
        <ul>
          {SidebarItems.map((menuItem, index) => (
            <>
              {/* TODO: add state for when li is hovered so that icon ikut ubah warna
               ***       add active link! (maybe use state)
               ***       react router nav
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
