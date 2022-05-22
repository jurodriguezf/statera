import React, { useEffect, useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Panel from "../../layout/BasicLayout/Panel";
import Input from "../../components/Input/Input";
import { makeAllRecipesRequest, makeQueryRecipesRequest } from "../../api/util";

const Home = (props) => {
  const { token } = props;
  const [homeRecipes, setHomeRecipes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await makeAllRecipesRequest(token);
      setHomeRecipes(response);
    };

    getData();
    console.log(homeRecipes);
  }, [token]);

  const getRecipesQuery = async (event) => {
    const query = event.target?.value
    const queryRecipes = await makeQueryRecipesRequest(query,token)
    console.log(queryRecipes);
    setHomeRecipes(queryRecipes)
}

  return (
    <Panel currentPage={"Home"}>
      <Input type="text" title="Username" onChange={getRecipesQuery}></Input>
      <div className="px-10">
        <div
          className={
            "font-youngserif text-5xl leading-normal mt-2 sm:mt-10 mb-4"
          }
        >
          <h1>Recetas</h1>
        </div>
        <div
          className={
            "font-manrope font-bold text-2xl leading-normal mt-2 sm:mt-10 mb-4"
          }
        >
          <h1>Platos popularess</h1>
        </div>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
          {homeRecipes?.map((recipe) => (
            <RecipeCard
              name={recipe.name}
              category={recipe.category || "Sin categoría"}
            />
          ))}
        </div>
      </div>
    </Panel>
  );
};



export default Home;
