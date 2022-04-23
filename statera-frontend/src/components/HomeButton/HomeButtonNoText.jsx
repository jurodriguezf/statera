import React from "react";

import { ReactComponent as Logo } from "../../components/Logo/logo.svg";

const HomeButtonNoText = (props) => {
    return (
        <button className="btn-home-no-text">
            <Logo className={"logo"}/>
        </button>
    );
};

export default HomeButtonNoText