import React, { useEffect, useState } from "react";
import RecipeCard from "../../components/Recipes/RecipeCard";
import Panel from "../../layout/BasicLayout/Panel";
import RecipeModal from "../../components/Recipes/RecipeModal";
import Input from "../../components/Input/Input";
import { makeAllRecipesRequest, makeQueryRecipesRequest } from "../../api/util";

const Home = (props) => {
  const { token } = props;
  const [homeRecipes, setHomeRecipes] = useState([]);
  const [modalContent, setModalContent] = useState({
    show: false,
    content: {},
  });

  useEffect(() => {
    const getData = async () => {
      const response = await makeAllRecipesRequest(token);
      setHomeRecipes(response);
    };

    getData();
  }, [token]);

  const getRecipesQuery = async (event) => {
    const query = event.target?.value
    const queryRecipes = await makeQueryRecipesRequest(query,token)
    console.log(queryRecipes);
    setHomeRecipes(queryRecipes)
}

  return (
    <Panel currentPage={"Home"}>
      <div className="px-10">
        <div
          className={
            "flex mt-2 sm:mt-10"
          }
        >
          <h1 className="w-7/12 font-youngserif text-5xl leading-normal">Recetas</h1>
          <Input className="w-5/12 h-auto" placeholder="Busca un plato" onChange={getRecipesQuery}/>
        </div>
        <div
          className={
            "font-manrope font-bold text-2xl leading-normal mt-2 sm:mt-10"
          }
        >
          <h1>Platos populares</h1>
        </div>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
          {homeRecipes?.map((recipe) => (
            <RecipeCard
              name={recipe.name}
              category={recipe.category || "Sin categoría"}
              onClick={() => setModalContent({ show: true, content: recipe })}
            />
          ))}
          <RecipeModal
            visible={modalContent.show}
            recipe={modalContent.content}
            onClose={() => setModalContent({ show: false, content: {} })}
          />
        </div>
      </div>
    </Panel>
  );
};



export default Home;
