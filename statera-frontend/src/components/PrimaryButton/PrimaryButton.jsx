import React from "react";

const PrimaryButton = (props) => {
  return <button type={props.type} onClick={props.onClick} className="btn-primary">{props.label}</button>;
};

export default PrimaryButton;
