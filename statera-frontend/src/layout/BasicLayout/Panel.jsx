import React, {useEffect, useState} from 'react';

import HomeButtonText from '../../components/HomeButton/HomeButtonText';
import IconButton from "../../components/IconButton/IconButton";
import {makeProfileRequest} from "../../api/util";


export default function Panel(props) {
    const {token} = props;
    const [profileData, setProfileData] = useState({});

    useEffect( () => {
        const getData = async () => {
            const response = await makeProfileRequest(token)
            setProfileData(response);
        }

        getData();
        //console.log(JSON.stringify(profileData))
    }, [token])


    const {children} = props;
    const getImagePath = (fileName) =>
        !!fileName
            ? "http://localhost:8080/static2/" + fileName
            : "https://www.seekpng.com/png/full/110-1100707_person-avatar-placeholder.png";
    return (
        <div className='w-screen h-auto min-h-screen main-page-bg flex'>
            <div className='w-1/6 h-auto my-10 mx-5'>
                <div className='profile-image w-full h-auto my-10'>
                    <div className="rounded-full bg-gray-300 h-20 w-20 m-auto">
                        <img
                            alt="The current recipe"
                            className="object-fill w-20 h-20 mr-2 rounded-full"
                            src={getImagePath(profileData.avatar)}
                        />
                    </div>
                    <div className='font-manrope text-lg text-black font-bold text-center mt-4 pb-4'>
                        {console.log(profileData.avatar)}
                        {profileData.userName}
                    </div>

                <div className='buttons h-4/6 flex flex-col justify-evenly px-5'>

                    <IconButton label="Home" link={"/"} currentPage={props.currentPage}/>
                    <IconButton label="Favoritos" link={"/favorites"} currentPage={props.currentPage}/>
                    <IconButton label="Crear Receta" link={"/add-recipe"} currentPage={props.currentPage}/>
                    <IconButton label="Mi Cuenta" link={"/my-profile"} currentPage={props.currentPage}/>
                </div>
                </div>

                <div className="flex justify-center items-center">
                    <HomeButtonText/>
                </div>
            </div>
            <div className='block overflow-y-auto bg-white w-5/6 h-auto my-5 mr-10 rounded-2xl drop-shadow-xl'>
                {children}
            </div>
        </div>
    )
}
