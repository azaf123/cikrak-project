import React from "react";

const NavLinks = () => {
  const Links = [
    {
      name: "Waste pick-up ",
      link: "/",
    },
    {
      name: "Education",
      link: "/",
    },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Get Started",
      link: "/",
    },
  ];
  return (
    <>
      {Links.map((link, i) => (
        <li key={i} className="font-semibold text-white hover:text-lightprimary">
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
