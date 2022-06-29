import React, {useState} from "react";

import Panel from "../../layout/BasicLayout/Panel";
import Input from "../../components/Input/Input";
import {putEditProfile} from "../../api/util";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

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
                    <LoginForm/>
                </div>

            </div>
        </Panel>
    );

    function LoginForm() {
        const navigate = useNavigate();
        const {register, handleSubmit} = useForm({
            defaultValues: {
                username: '',
                dateofbirth: '',
                location: ''
            }
        })

        const onSubmit = async (data) => {
            const { username, dob, location } = data;
            console.log(data)

            const modifyData = await putEditProfile(data, token);

            if(modifyData.status !== "success"){
                return;
            }
            navigate("/my-profile")
        }


        return <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className={"max-w-xl"}>
                <Input type="text" title="Nombre de usuario" placeholder={"Ingresa tu nombre de usuario"}
                       register={register("username")}/>
                <Input type="date" title="Fecha de nacimiento" register={register("dateofbirth")}/>
                <Input type="text" title="Ciudad y país" placeholder={"Bogotá, Colombia"} register={register("location")}/>
                <Input type="file" title="Foto de perfil" register={register("profilepicture")} />
                <div className="w-full max-w-xs flex justify-center my-10">
                    <PrimaryButton type="submit" label="Guardar" className=""/>
                </div>
            </div>

        </form>;
    }
}

export default EditProfile
