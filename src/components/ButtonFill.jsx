import React from "react";

const ButtonFill = ({ children }) => {
  return (
    <button
      className ="bg-lightprimary text-white rounded-full shadow-sm
    shadow-lightprimary font-semibold md:text-sm text-xs tracking-wide md:px-9 px-7 py-3"
    href='#section1'>
      {children}
    </button>
  );
};

export default ButtonFill;
