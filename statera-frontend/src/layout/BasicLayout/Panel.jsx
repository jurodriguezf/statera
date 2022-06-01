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
    }, [token])

    console.log(JSON.stringify(profileData))

    const {children} = props;
    return (
        <div className='w-screen h-screen main-page-bg flex'>
            <div className='w-1/6 h-auto my-10 mx-5 grid '>
                <div className='profile-image w-full h-auto my-10'>
                    <div className="rounded-full bg-gray-300 h-20 w-20 m-auto"><img src="" alt=""/></div>
                    <div className='font-manrope text-lg text-black font-bold text-center mt-4 pb-4'>
                        {profileData.userName}
                    </div>
                </div>
                <div className='buttons h-4/6 flex flex-col justify-evenly px-5'>
                    <IconButton label="Home" link={"/"} currentPage={props.currentPage}/>
                    <IconButton label="Favoritos" link={"/favorites"} currentPage={props.currentPage}/>
                    <IconButton label="Crear Receta" link={"/add-recipe"} currentPage={props.currentPage}/>
                    <IconButton label="Mi Cuenta" link={"/my-profile"} currentPage={props.currentPage}/>
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
