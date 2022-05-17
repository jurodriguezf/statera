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
        <Panel userName={profileData.userName} currentPage={"Mi Cuenta"}>
            <div className={"font-youngserif text-5xl leading-normal mt-2 sm:mt-10 mb-4 px-3"}>
                <h1>Mi cuenta</h1>
            </div>
            <div className={"px-10"}>
                {Object.keys(profileData).map((key) => (
                    <div className={"mt-5 mb-5"}>
                        <div className={"font-bold"}>
                            <h2>{key}</h2>
                        </div>
                        <div className={"px-3 text-[#6D6D6D]"}>
                            {/*<h3>{JSON.stringify(profileData.userName).replace(/['"]+/g,"")}</h3>*/}
                            <h3>{(profileData[key])}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"w-48 mt-10"}>
                <PrimaryButton type="submit" link={"/edit-profile"} label="Editar perfil" className=""/>
            </div>
        </Panel>
    );
}

export default MyProfile
