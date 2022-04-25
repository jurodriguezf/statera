import React from "react";
import {useNavigate} from "react-router-dom";

const SecondaryButton = (props) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(props.link)} className="btn-secondary">{props.label}</button>
    );
};

export default SecondaryButton
