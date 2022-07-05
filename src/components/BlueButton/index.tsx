import React from "react";

type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  btnText: string;
};

function BlueButton(props: ButtonProps) {
  return (
    <>
      <button
        type="button"
        onClick={props.onClick}
        className="bg-main-blue hover:bg-greenprimary text-white text-sm font-bold py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transition-none disabled:transform-none"
        disabled={props.disabled}
      >
        {props.btnText}
      </button>
    </>
  );
}

export default BlueButton;
