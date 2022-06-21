import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const NavLinks = () => {
  const Links = [
    {
        id: 1,
      name: "Waste pick-up ",
      link: "/",
    },
    {
        id: 2,
      name: "Education",
      link: "/",
    },
    {
        id: 3,
      name: "About Us",
      link: "/",
    },
    {id: 4,
      name: "Get Started",
      link: "/",
    },
    {
        id: 5,
        name: "Notification",
        link: "/",
        icon: "faBell"
    }
  ];
  return (
    <>
      {Links.map((link, i) => (
        <li key={i} className="font-semibold text-white hover:text-primary">
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
