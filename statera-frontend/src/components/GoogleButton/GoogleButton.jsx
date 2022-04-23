import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton(props) {
  return (
    <button className="btn-google items-center w-full my-2 flex justify-center">
      <FcGoogle className="mx-2" size={20} />
      {props.label}
    </button>
  );
}
