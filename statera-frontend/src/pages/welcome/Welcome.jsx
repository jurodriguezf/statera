import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";

const Welcome = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Welcome</h1>
            <br/>
            <PrimaryButton label="Regístrate"/>
            <SecondaryButton label={"Inicia sesión"}/>
        </div>
    );
};

export default Welcome
