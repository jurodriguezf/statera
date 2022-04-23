import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { ReactComponent as LogoSvg } from "../../components/Logo/logo.svg";
import { ReactComponent as LogoWithText } from "../../components/Logo/logo-with-text.svg";

const Welcome = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Welcome</h1>
            <br/>
            <PrimaryButton label="Regístrate"/>
            <SecondaryButton label={"Inicia sesión"}/>
            <LogoSvg className={"logo"}/>
            <LogoWithText className={"logo-with-text"}/>
        </div>
    );
};

export default Welcome
