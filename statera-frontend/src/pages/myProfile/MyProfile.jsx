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

            setProfileData(response);
        }

        getData();
      }, [token])
    console.log(JSON.stringify(profileData))
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
                        {/*<h3>{JSON.stringify(profileData.userName).replace(/['"]+/g,"")}</h3>*/}
                        <h3>{JSON.stringify(profileData.userName)}</h3>
                    </div>
                </div>

                <div className={"mt-5"}>
                    <div className={"font-bold"}>
                        <h2>Email</h2>
                    </div>
                    <div className={"px-3 w-60"}>
                        <h3>{JSON.stringify(profileData.email)}</h3>
                    </div>
                </div>

                <div className={"mt-5"}>
                    <div className={"font-bold"}>
                        <h2>Fecha de nacimiento</h2>
                    </div>
                    <div className={"px-3 w-60"}>
                        <h3>{JSON.stringify(profileData.dateOfBirth)}</h3>
                    </div>
                </div>

                <div className={"mt-5"}>
                    <div className={"font-bold"}>
                        <h2>Ciudad</h2>
                    </div>
                    <div className={"px-3 w-60"}>
                        <h3>{JSON.stringify(profileData.location)}</h3>
                    </div>
                </div>

                <div className={"w-48 mt-10"}>
                    <PrimaryButton type="submit" label="Editar perfil" className=""/>
                </div>
            </div>
        </Panel>
    );
}

export default MyProfile
