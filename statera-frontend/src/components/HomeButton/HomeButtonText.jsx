import React from "react";

import { ReactComponent as LogoWithText } from "../../components/Logo/logo-with-text.svg";

const HomeButtonText = (props) => {
    return (
        <button className="btn-home-text">
            <LogoWithText className={"logo-with-text"}/>
        </button>
    );
};

export default HomeButtonText