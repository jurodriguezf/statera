import React from 'react';
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Panel from "../../layout/BasicLayout/Panel";

const Home = () => {
  return (
    <Panel>
      <div className="px-10">
        <div className={"font-youngserif text-5xl leading-normal mt-2 sm:mt-10 mb-4"}>
          <h1>Bienvenido!</h1>
        </div>
        <div className={"font-manrope font-bold text-2xl leading-normal mt-2 sm:mt-10 mb-4"}>
          <h1>Recetas populares</h1>
        </div>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
          <RecipeCard name="Fríjoles con kumis" category="Ensalada"/>
          <RecipeCard name="Fríjoles con kumis" category="Ensalada"/>
          <RecipeCard name="Fríjoles con kumis" category="Ensalada"/>
          <RecipeCard name="Fríjoles con kumis" category="Ensalada"/>
          <RecipeCard name="Fríjoles con kumis" category="Ensalada"/>
          <RecipeCard name="Fríjoles con kumis" category="Ensalada"/>
          <RecipeCard name="Fríjoles con kumis" category="Ensalada"/>
          <RecipeCard name="Fríjoles con kumis" category="Ensalada"/>
        </div>
      </div>
    </Panel>
  )
}
export default Home;
