import React from "react";

function BlueButton(props) {
  return (
    //  TODO: change hover color
    <>
      <button
        type="submit"
        onClick={props.onClick}
        className="bg-main-blue hover:bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:transition-none disabled:transform-none"
        disabled={props.disabled}
      >
        {props.btnText}
      </button>
    </>
  );
}

export default BlueButton;
