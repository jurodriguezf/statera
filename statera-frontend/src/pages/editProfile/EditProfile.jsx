import React, {useEffect, useState} from "react";

import Panel from "../../layout/BasicLayout/Panel";
import Input from "../../components/Input/Input";
import {makeProfileRequest} from "../../api/util";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import MyProfile from "../myProfile/MyProfile";

const EditProfile = (props) => {
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
    console.log(JSON.stringify(profileData))
    return (
        <Panel userName={JSON.stringify(profileData.userName)}>
            <div className={"px-10"}>
                <div className={"font-youngserif text-5xl leading-normal mt-2 sm:mt-10 mb-4"}>
                    <h1>Editar mi perfil</h1>
                </div>
                <div className={"mt-5 mb-5"}>
                    <div className={"font-bold"}>
                        <h2>Nombre de usuario</h2>
                    </div>
                    <div className={"px-3 w-60"}>
                        <Input/>
                    </div>
                </div>

                <div className={"mt-5"}>
                    <div className={"font-bold"}>
                        <h2>Email</h2>
                    </div>
                    <div className={"px-3 w-60"}>
                        <Input/>
                    </div>
                </div>

                <div className={"mt-5"}>
                    <div className={"font-bold"}>
                        <h2>Fecha de nacimiento</h2>
                    </div>
                    <div className={"px-3 w-60"}>
                        <Input/>
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

                <div className={"w-48 mt-5"}>
                    <PrimaryButton type="submit" label="Guardar" className=""/>
                </div>
            </div>
        </Panel>
    );
}

export default EditProfile