import React from "react";
import GreenLoader from "../../assets/green-loader.gif";

function Loader() {
  // TODO: make center
  return (
    <>
      <div className="top-0 left-0 w-full h-full bg-slate-200 fixed opacity-80">
        <img className="m-auto z-10 w-40 h-40 opacity-50" src={GreenLoader} alt="Loader Gif"/>
      </div>
    </>
  );
}

export default Loader;
