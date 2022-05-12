import React, {useEffect, useState} from "react";

import Panel from "../../layout/BasicLayout/Panel";
import Input from "../../components/Input/Input";
import {makeProfileRequest} from "../../api/util";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const MyProfile = (props) => {
    const {token} = props;
    const [profileData, setProfileData] = useState({});



    useEffect( () => {
        const getData = async () => {
            const response = await makeProfileRequest(token)
            console.log(token)

            setProfileData(response);
        }

        getData();
      }, [token])

    return (

        <Panel userName={"Peppa Perez"} currentPage={"Mi Cuenta"}>
            <div className={"px-10"}>
                <div className={"font-youngserif text-5xl leading-normal mt-2 sm:mt-10 mb-4"}>
                    <h1>Mi cuenta</h1>
                </div>
                <div className={"mt-5 mb-5"}>
                    <div className={"font-bold"}>
                        <h2>Usuario</h2>
                    </div>
                    <div className={"px-3 text-[#6D6D6D]"}>
                        <h3>{JSON.stringify(profileData.userName).replace(/['"]+/g,"")}</h3>
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
