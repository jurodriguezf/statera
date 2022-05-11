import React from 'react';
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Panel from "../../layout/BasicLayout/Panel";

const Home = () => {
  return (
    <Panel>
        This is a homepage, it means you are successfully logged in

        <div className="flex flex-row">
          <PrimaryButton label="Ir a mi perfil" link={"/my-profile"}/>
          <RecipeCard name="Fríjoles con kumis" category="Ensalada"/>
          <RecipeCard name="Fríjoles con kumis" category="Ensalada"/>
        </div>
    </Panel>
  )
}
export default Home;
