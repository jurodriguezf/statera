import React from 'react';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import HomeButtonText from '../../components/HomeButton/HomeButtonText';


export default function Panel(props) {
  const {children} = props;
  console.log(props);
  return (
    <div className='w-screen h-screen bg-beige flex'>
      <div className='w-1/6 h-auto my-10 mx-5'>
        <div className='h-4/6 flex flex-col justify-evenly px-5'>
          <div className='profile-image w-full h-auto'>
            <div className="rounded-full bg-white h-32 w-32 m-auto"><img src="" alt=""/></div>
            <div className='font-manrope text-black font-bold text-center'> A name here</div>
          </div>
          <PrimaryButton label="Home"/>
          <PrimaryButton label="Favoritos"/>
          <PrimaryButton label="Page3"/>
          <PrimaryButton label="Mi cuenta"/>
        </div>
        <HomeButtonText/>
      </div>
      <div className='bg-white w-5/6 h-auto m-5 rounded-2xl'>
        {children}
      </div>
    </div>


  )
}
