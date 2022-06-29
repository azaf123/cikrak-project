import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiAccountCircleLine } from 'react-icons/ri';

const NavAcc = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="h-12 sticky top-0 flex justify-between bg-greenav md:px-24 shadow-md z-50">
      <Link to="/">
        <img src={Logo} alt="logo" className="h-10 mt-1 cursor-pointer " />
      </Link>
      <ul className="md:flex hidden items-center gap-10">
        <NavLinks />
        <IoMdNotificationsOutline
          className="h-7 w-7 text-white"
          aria-hidden="true"
        />
        <RiAccountCircleLine
          className="h-7 w-7 text-white"
          aria-hidden="true"
        />
        <p class="text-white text-sm">Halo, Jane Doe</p>
      </ul>
      {/* Mobile Nav */}
      <ul
        className={`fixed top-0 z-50 bg-lightprimary w-2/3 h-screen shadow-2xl
      md:hidden flex flex-col gap-10 text-medium  p-7 pt-10 duration-500
      ${open ? 'right-0' : 'right-[-100%]'}`}
      >
        <NavLinks />
        <IoMdNotificationsOutline
          className="h-7 w-7 text-white"
          aria-hidden="true"
        />
        <RiAccountCircleLine
          className="h-7 w-7 text-white"
          aria-hidden="true"
        />
      </ul>

      <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
        <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
      </div>
    </nav>
  );
};

export default NavAcc;
