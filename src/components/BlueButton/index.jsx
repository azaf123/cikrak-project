import React from "react";

function BlueButton(props) {
  return (
    //  TODO: change hover color
    <>
      <button class="bg-main-blue hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
        {props.btnText}
      </button>
    </>
  );
}

export default BlueButton;
