import { useState } from "react";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

const RadioInput = (props) => {
  return (
    <div className={props.className}>
      <div className="font-manrope font-bold text-sm py-2 px-2">
        {props.title}
      </div>
      <div className="flex items-center px-2 my-3">
        <label>
          <input
            className="mx-2"
            type="radio"
            id={props.id}
            name={props.name}
            value={props.value}
            {...props.register}
          />
          {props.label}
        </label>
      </div>
    </div>
  );
};

export default RadioInput;
