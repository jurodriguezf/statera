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
        <Panel userName={profileData.userName} currentPage={"Mi Cuenta"}>
            <div {...props} className="flex">
                <div className="relative w-full my-auto px-10 md:px-20 sm:w-full">
                    <p className="font-youngserif text-4xl my-10">Edit Profile</p>
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

            <Input type="text" title="Username" register={register("username")}/>
            <Input type="text" title="Date of Birth" register={register("dateofbirth")}/>
            <Input type="text" title="Location" register={register("location")}/>
            <div className="w-full flex justify-center my-10">
                <PrimaryButton type="submit" label="Guardar" className=""/>
            </div>
        </form>;
    }
}

export default EditProfile
