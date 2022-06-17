import React from "react";

function BlueOutlineButton(props) {
  return (
    <>
      <button class="bg-transparent text-main-blue hover:bg-blue-200 hover:text-white font-semibold py-2 px-4 border border-main-blue rounded">
        {props.btnText}
      </button>
    </>
  );
}

export default BlueOutlineButton;
