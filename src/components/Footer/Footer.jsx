import React from 'react';
import Logo from '../../assets/logo2.png';
import SocialMedia from './SocialMedia';
const Footer = () => {
  const Links = [
    {
      title: 'Location',
      links: ['Jakarta', 'Denpasar', 'Semarang', 'Surabaya'],
    },
    { title: 'Contact', links: ['About Us', 'Teams', 'Profile', 'FAQ'] },
  ];
  return (
    <footer className="pt-20 md:px-24 px-4 bg-lightprimary">
      <div className="flex md:flex-row flex-col gap-20">
        <div className="flex-1">
          <img src={Logo} alt="logo" className="h-12" />
          <p className="md:w-1/2 leading-relaxed text-sm text-white pt-7">
            Cikrak is a waste pick-up web-application that aims to raise
            awareness on the importance of waste management and the negative
            impacts poor waste management has on the environment.
          </p>
          <SocialMedia />
        </div>
        <div className="flex-1 flex flex-wrap gap-20 ml-32">
          {Links.map((link, i) => (
            <ul key={i}>
              <h1 className="font-semibold pb-3">{link.title}</h1>
              {link.links.map((lk, idx) => (
                <li key={idx} className="py-2.5 text-sm text-white">
                  {lk}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <p className="text-center py-10 mt-6 text-sm text-white">
        Copyright © 2022 - All Rights Reserved Cikrak.
      </p>
    </footer>
  );
};

export default Footer;
