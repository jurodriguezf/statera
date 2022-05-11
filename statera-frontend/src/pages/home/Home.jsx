import React from 'react';
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const Home = () => {
  return (
    <div>
      This is a homepage, it means you are successfully logged in
      <PrimaryButton label="Ir a mi perfil" link={"/my-profile"}/>
    </div>
  )
}
export default Home;
