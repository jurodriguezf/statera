import React, { useEffect, useState } from "react";
import Panel from "../../layout/BasicLayout/Panel";
import RecipeModal from "../../components/Recipes/RecipeModal";
import {makeProfileIDCommentRequest, makeQueryRecipesRequest} from "../../api/util";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = (props) => {
  const { token } = props;
  const [homeRecipes, setHomeRecipes] = useState([]);
  const [profileDataID, setProfileDataID] = useState({});
  const [modalContent, setModalContent] = useState({
    show: false,
    content: {},
  });

  useEffect(() => {
    const getData = async () => {
      const response = await makeQueryRecipesRequest("", token);
      setHomeRecipes(response);
      const responseForID = await makeProfileIDCommentRequest(token)
      setProfileDataID(responseForID);
    };

    getData();
  }, [token]);

  const getRecipesQuery = async (event) => {
    const query = event.target?.value;
    const queryRecipes = await makeQueryRecipesRequest(query, token);
    console.log(queryRecipes);
    setHomeRecipes(queryRecipes);
  };

  return (
    <Panel token={token} currentPage={"Home"}>
      <div className="px-10">
        <div className={"grid grid-cols-2 justify-between mt-2 sm:mt-10 mb-4"}>
          <div className={"font-youngserif text-5xl leading-normal"}>
            <h1>Recetas</h1>
          </div>
          <SearchBar
            placeholder={"Busca una receta"}
            onChange={getRecipesQuery}
          />
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
              image={recipe.imageLink}
              rating={recipe.rating}
            />
          ))}
          <RecipeModal
            id={profileDataID["id"]}
            token={token}
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
