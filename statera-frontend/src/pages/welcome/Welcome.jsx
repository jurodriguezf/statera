import React from "react";
import Input from "../../components/Input/Input"
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import HomeButtonText from "../../components/HomeButton/HomeButtonText";
import HomeButtonNoText from "../../components/HomeButton/HomeButtonNoText";

const Welcome = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Welcome</h1>
            <br/>

            <PrimaryButton label="Regístrate"/>
            <SecondaryButton label={"Inicia sesión"}/>
            <HomeButtonText/>
            <HomeButtonNoText/>
        </div>
    );
};

export default Welcome
