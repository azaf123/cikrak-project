import React from 'react';

const NavLinks = () => {
  const Links = [
    {
      name: 'Waste pick-up ',
      link: '/',
    },
    {
      name: 'Education',
      link: '/home-edu',
    },
    {
      name: 'About Us',
      link: '/',
    },
  ];
  return (
    <>
      {Links.map((link, i) => (
        <li
          key={i}
          className="font-semibold text-white hover:text-lightprimary"
        >
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
