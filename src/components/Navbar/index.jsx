import React, { useState } from "react";
import NavLinks from "../../data/NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between bg-main-blue">
      <img
        src="https://img.freepik.com/free-photo/asian-woman-posing-looking-camera_23-2148255359.jpg?t=st=1655398402~exp=1655399002~hmac=49552dd513a59881bd94e6dde197a76ecb808ce13543285ec2d1c9f4cd2d698c&w=740"
        alt="logo"
        className="h-9 cursor-pointer"
      />
      <ul className="md:flex hidden items-center gap-10">
        <NavLinks />
        {/* Leona add here for notif */}
        
      </ul>
      {/* Mobile Nav */}
      <ul
        className={`fixed top-0 z-50 bg-lightprimary w-2/3 h-screen shadow-2xl
      md:hidden flex flex-col gap-10 text-medium  p-7 pt-20 duration-500
      ${open ? "right-0" : "right-[-100%]"}`}
      >
        <NavLinks />
      </ul>

      <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
      </div>
    </nav>
  );
}

export default NavBar;
