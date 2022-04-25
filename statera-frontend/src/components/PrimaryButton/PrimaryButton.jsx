import React from "react";
import {useNavigate} from "react-router-dom";

const PrimaryButton = (props) => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(props.link)} className="btn-primary">{props.label}</button>;
};

export default PrimaryButton;
