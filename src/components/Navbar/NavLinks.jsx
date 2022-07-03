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
      link: '/aboutus',
    },
    {
      name: 'Get Started',
      link: '/login',
    },
  ];
  return (
    // TODO: change link login to register; only for temporary testing
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
