import Panel from "../../layout/BasicLayout/Panel";
import IngredientChip from "../../components/IngredientChip/IngredientChip";
import SearchBar from "../../components/SearchBar/SearchBar";
import React, {useEffect, useState} from "react";
import {makeAllRecipesRequest, makeQueryRecipesRequest} from "../../api/util";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeModal from "../../components/Recipes/RecipeModal";

const Ingredients = (props) => {
    const { token } = props;
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
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

    const [item, setItem] = useState(["A", "B"]);
    const [input, setInput] = useState("");

    const saveInput = (e) => {
        setInput(e.target.value);
    };

    const addNewItem = () => {
        const copyList = [...item];
        copyList.push(input);
        setItem(copyList);
        setInput("");
    }

    return (
        <Panel currentPage={"Ingredientes"}>
            <div className={"px-10"}>
                <div className={"grid grid-cols-2 justify-between mt-2 sm:mt-10 mb-8"}>
                    <div className={"font-youngserif text-5xl leading-normal"}>
                        <h1>Ingredientes</h1>
                    </div>
                    <SearchBar
                        placeholder={"Busca un ingrediente"}
                        onChange={saveInput}
                    />
                    {/*!TODO: Finish input enter functionality*/}
                    {/*<button onClick={addNewItem}>*/}
                    {/*    Button*/}
                    {/*</button>*/}
                </div>
                <div className="flex flex-wrap justify-center space-x-2">
                    {/*!TODO: Map array into IngredientChip Components*/}
                    {/*{item.map((subItems, sIndex) => {*/}
                    {/*    return <IngredientChip key={sIndex}> name={subItems}</IngredientChip>;*/}
                    {/*})}*/}

                    <IngredientChip name={"Huevos"}></IngredientChip>
                    <IngredientChip name={"Arroz"}></IngredientChip>
                    <IngredientChip name={"Leche"}></IngredientChip>
                    <IngredientChip name={"Pan"}></IngredientChip>
                    <IngredientChip name={"Sal"}></IngredientChip>
                </div>
                <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
                    {favoriteRecipes?.map((recipe) => (
                        <RecipeCard
                            name={recipe.name}
                            category={recipe.category || "Sin categoría"}
                            onClick={() => setModalContent({ show: true, content: recipe })}
                            image={recipe.imageLink}
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
    )
}

export default Ingredients