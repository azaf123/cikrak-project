import React from "react";

type ButtonProps = {
  buttonType?: 'submit' | 'reset' | 'button';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  btnText: string;
};

const BlueButton = (props: ButtonProps) => {
  return (
    <>
      <button
        type={props.buttonType}
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
