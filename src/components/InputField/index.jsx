import React from "react";

function InputField(props) {
  return (
    <>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        readOnly={props.readOnly}
      ></input>
    </>
  );
}

export default InputField;
