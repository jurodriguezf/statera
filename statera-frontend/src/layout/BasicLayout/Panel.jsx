import React from 'react';
import HomeButtonText from '../../components/HomeButton/HomeButtonText';
import IconButton from "../../components/IconButton/IconButton";


export default function Panel(props) {
    const {children} = props;
    return (
        <div className='w-screen h-screen main-page-bg flex'>
            <div className='w-1/6 h-auto my-10 mx-5 grid '>
                <div className='profile-image w-full h-auto my-10'>
                    <div className="rounded-full bg-gray-300 h-20 w-20 m-auto"><img src="" alt=""/></div>
                    <div className='font-manrope text-lg text-black font-bold text-center mt-4'> {props.userName}</div>
                </div>
                <div className='buttons h-4/6 flex flex-col justify-evenly px-5'>
                    <IconButton label="Home" active/>
                    <IconButton label="Favoritos"/>
                    <IconButton label="Crear Receta"/>
                    <IconButton label="Mi Cuenta"/>
                </div>
                <div className="flex justify-center items-center">
                    <HomeButtonText/>
                </div>
            </div>
            <div className='bg-white w-5/6 h-auto my-10 mr-10 rounded-2xl drop-shadow-xl'>
                {children}
            </div>
        </div>
    )
}
