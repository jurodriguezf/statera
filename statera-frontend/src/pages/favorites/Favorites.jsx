import React, {useEffect, useState} from 'react';
import Panel from "../../layout/BasicLayout/Panel";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import {
    makeAllRecipesRequest, makeProfileIDCommentRequest,
    makeQueryRecipesRequest
} from "../../api/util";
import RecipeModal from "../../components/Recipes/RecipeModal";

const Favorites = (props) => {
    const { token } = props;
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const [profileDataID, setProfileDataID] = useState({});
    const [modalContent, setModalContent] = useState({
        show: false,
        content: {},
    });

    useEffect(() => {
        const getData = async () => {
            //!TODO: Uncomment the line below when query is available
            //const response = await makeFavoriteRecipesRequest(token);
            const response = await makeAllRecipesRequest(token);
            setFavoriteRecipes(response);
            const responseOther = await makeProfileIDCommentRequest(token)
            setProfileDataID(responseOther);
        };

        getData();
    }, [token]);

    const getFavoritesRecipesQuery = async (event) => {
        const query = event.target?.value;
        //!TODO: Uncomment line below when query is available
        //const queryRecipes = await makeQueryFavoriteRecipesRequest(query, token);
        const queryRecipes = await makeQueryRecipesRequest(query, token);
        console.log(queryRecipes);
        setFavoriteRecipes(queryRecipes);
    };

    return (
        <Panel token={token} currentPage={"Favoritos"}>
            <div className="px-10">
                <div className={"grid grid-cols-2 justify-between mt-2 sm:mt-10 mb-4"}>
                    <div className={"font-youngserif text-5xl leading-normal"}>
                        <h1>Favoritos</h1>
                    </div>
                    <SearchBar
                        placeholder={"Busca una receta"}
                        onChange={getFavoritesRecipesQuery}
                    />
                </div>
                <div className={"font-manrope font-bold text-2xl leading-normal mt-2 sm:mt-10 mb-4"}>
                    <h1>Tus recetas favoritas</h1>
                </div>
                <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
                    {favoriteRecipes?.map((recipe) => (
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
    )
}

export default Favorites;
