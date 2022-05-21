import React, { useEffect, useState } from "react";
import RecipeCard from "../../components/Recipes/RecipeCard";
import Panel from "../../layout/BasicLayout/Panel";
import { makeAllRecipesRequest } from "../../api/util";
import RecipeModal from "../../components/Recipes/RecipeModal";

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
      console.log(response);
      setHomeRecipes(response);
    };

    getData();
  }, [token]);

  return (
    <Panel currentPage={"Home"}>
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
          <h1>Platos populares</h1>
        </div>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
          {homeRecipes.map((recipe) => (
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
