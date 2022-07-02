import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import NavLinks from "../../data/NavLinks";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const mapLinks = () => {
    return NavLinks.map((link, i) => (
     
      <li key={i} className="font-semibold text-white hover:text-lightprimary">
        {i < 4 &&  (<a href={link.link}>{link.name}</a>)}
      </li>
    ));
  };

  return (
    <nav className="h-12 sticky top-0 flex justify-between bg-greenav md:px-24 shadow-md z-50">
      <Link to="/">
        <img src={Logo} alt="logo" className="h-10 mt-1 cursor-pointer " />
      </Link>
      <ul className="md:flex hidden items-center gap-10">{mapLinks()}</ul>
      {/* Mobile Nav */}
      <ul
        className={`fixed top-0 z-50 bg-lightprimary w-2/3 h-screen shadow-2xl
      md:hidden flex flex-col gap-10 text-medium  p-7 pt-10 duration-500
      ${open ? "right-0" : "right-[-100%]"}`}
      >
        {mapLinks()}
      </ul>

      <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
      </div>
    </nav>
  );
};

export default Nav;
