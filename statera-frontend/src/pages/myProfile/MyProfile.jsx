import React from "react";
import {Popover} from "@headlessui/react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

import Panel from "../../layout/BasicLayout/Panel";
import Input from "../../components/Input/Input";

const MyProfile = () => {
    return (
        <Panel>
            <div className={"px-10"}>
                <div className={"font-youngserif text-5xl leading-normal mt-2 sm:mt-10 mb-4"}>
                    <h1>Mi cuenta</h1>
                </div>
                <div className={"mt-5 mb-5"}>
                    <div className={"font-bold"}>
                        <h2>Usuario</h2>
                    </div>
                    <div className={"px-3 text-[#6D6D6D]"}>
                        <h3>userName</h3>
                    </div>
                </div>

                <div className={"mt-5"}>
                    <div className={"font-bold"}>
                        <h2>Nombre visible</h2>
                    </div>
                    <div className={"px-3 w-60"}>
                        <Input/>
                    </div>
                </div>

                <div className={"mt-5"}>
                    <div className={"font-bold"}>
                        <h2>Contraseña</h2>
                    </div>
                    <div className={"px-3 w-60"}>
                        <Input password/>
                    </div>
                </div>

                <div className={"mt-5"}>
                    <div className={"font-bold"}>
                        <h2>Ciudad</h2>
                    </div>
                    <div className={"px-3 w-60"}>
                        <Input/>
                    </div>
                </div>

                <div className={"w-48 mt-10"}>
                    <PrimaryButton type="submit" label="Guardar" className=""/>
                </div>
            </div>
        </Panel>

    );
}

export default MyProfile