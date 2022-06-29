import React, {useEffect, useState} from "react";

import Panel from "../../layout/BasicLayout/Panel";
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
        <Panel token={token} currentPage={"Mi Cuenta"}>
            <div className="px-10">
                <div className={"font-youngserif text-5xl leading-normal mt-2 sm:mt-10 mb-4"}>
                    <h1>Mi cuenta</h1>
                </div>
                <div className={"font-manrope font-bold text-xl leading-normal mt-2 sm:mt-10 mb-4"}>
                    <h1>Estos son los datos que tienes configurados actualmente:</h1>
                </div>
                <div className={"ml-5 pt-3"}>
                    {Object.keys(profileData).map((key) => (
                        <div className={"mt-5 mb-5 font-manrope grid grid-cols-3"}>
                            <div className={"font-bold"}>
                                <h2>{key}</h2>
                            </div>
                            <div className={"text-gray-500"}>
                                <h3>{(profileData[key])}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={"w-40 mt-10"}>
                    <PrimaryButton type="submit" link={"/edit-profile"} label="Editar perfil" className=""/>
                </div>
            </div>
        </Panel>
    );
}

export default MyProfile
