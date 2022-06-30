import React, {Fragment, useState} from "react";

import Panel from "../../layout/BasicLayout/Panel";
import Input from "../../components/Input/Input";
import {putEditProfile} from "../../api/util";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const EditForm = (props) =>{
    const {token} = props;
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm({
        defaultValues: {
            userName: '',
            dateOfBirth: '',
            location: '',
            avatar: '',
        }
    })

    const onSubmit = async (data) => {
        const { userName, dateOfBirth, location } = data;
        //console.log(data)
        //data.dateOfBirth = data.dateOfBirth + "T00:00:00Z"

        const modifyData = await putEditProfile(data, token);

        if(modifyData.status !== "success"){
            return;
        }
        navigate("/my-profile")
    }


    return (
        <Fragment>
            <form
                className="px-10"
                //autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    type="text"
                    title="Nombre"
                    register={register("userName", { required: true })}
                />
                <Input type="text" title="Fecha" register={register("dateOfBirth")} />
                <Input type="text" title="Ubicación" register={register("location")} />
                <Input type="file" title="Imagen" register={register("avatar")} />

                <div className={"w-2/4 flex items-center"}>
                    <PrimaryButton type="submit" label="Guardar" className="mt-10" link={"/my-profile"}/>
                </div>
            </form>
        </Fragment>
        );
}

const EditProfile = (props) => {
    const {token} = props;
    const [profileData] = useState({});

    return (
        <Panel token={token} userName={profileData.userName} currentPage={"Mi Cuenta"}>
            <div {...props} className="flex">
                <div className="relative w-full my-auto px-5 md:px-12 sm:w-full">
                    <div className={"font-youngserif text-5xl leading-normal mt-2 sm:mt-10 mb-4"}>
                        <h1>Editar perfil</h1>
                    </div>
                    <div className={"font-manrope font-bold text-xl leading-normal mt-2 sm:mt-10 mb-7"}>
                        <h1>Puedes cambiar tus datos a continuación:</h1>
                    </div>
                    <EditForm token={token}/>
                </div>

            </div>
        </Panel>
    );
}


export default EditProfile
