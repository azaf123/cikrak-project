import React, { useState, useEffect } from "react";
import NavLinks from "../../data/NavLinks";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import NotificationArea from "../NotificationArea";
import { Link, useNavigate } from "react-router-dom";

// navbar when user is logged in
const NavBarAuth = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  const mapLinks = () => {
    return NavLinks.map((link, i) => (
      <li
        key={i}
        className={`$font-semibold text-base text-white hover:text-mid-green`}
      >
        {i > 3 ? (
          <button
            className="active:bg-blue-300 focus:bg-blue-300 cursor-pointer"
            onClick={() => {
              i === 5 && navigate("/profile");
            }}
          >
            <span
              onMouseOver={() => {
                i === 4 && setShowNotif(true);
          
              }}
              onMouseLeave={() => {
                i === 4 && setTimeout(() => setShowNotif(false), 1500);
         
              }}
              className="flex flex-row"
            >
              <FontAwesomeIcon icon={link.icon} />
            </span>
          </button>
        ) : (
          i !== 3 && <a href={link.link}>{link.name}</a>
        )}
      </li>
    ));
  };
  return (
    <nav className="h-12 sticky top-0 flex justify-between bg-gradient-to-r from-main-green to-main-blue md:px-24 shadow-md z-50">
      <Link to="/">
        <img src={Logo} alt="logo" className="h-10 mt-1 cursor-pointer " />
      </Link>
      <ul className="md:flex hidden items-center gap-10">{mapLinks()}</ul>

      {/* Mobile Nav */}
      <ul
        className={`fixed top-0 z-50 bg-main-blue w-2/3 h-screen shadow-2xl
        md:hidden flex flex-col gap-10 text-medium  p-7 pt-10 duration-500
        ${open ? "right-0" : "right-[-100%]"}`}
      >
        {mapLinks()}
      </ul>
      <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
        <span className="text-white">
          <FontAwesomeIcon icon={open ? faClose : faBars} />
        </span>
      </div>

      {/* show notif area */}
      {showNotif && <NotificationArea setShowNotif={setShowNotif}/>}
    </nav>
  );
};

export default NavBarAuth;
