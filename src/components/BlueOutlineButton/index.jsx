import React from "react";

function BlueOutlineButton(props) {
  return (
    <>
      <button
        type="button"
        onClick={props.onClick}
        className="bg-transparent text-sm text-main-blue hover:bg-blue-200 hover:text-white font-semibold py-2 px-4 border border-main-blue rounded"
      >
        {props.btnText}
      </button>
    </>
  );
}

export default BlueOutlineButton;
