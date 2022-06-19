import React from "react";
import { useNavigate } from "react-router-dom";

const PrimaryButton = (props) => {
  const navigate = useNavigate();

  return (
    <button
      type={props.type}
      onClick={() => {
        if(props.onClick) props.onClick()
        if(props.link) navigate(props.link);
      }}
      className="btn-primary"
    >
      {props.label}
    </button>
  );
};

export default PrimaryButton;
