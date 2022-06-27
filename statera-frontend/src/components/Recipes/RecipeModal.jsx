import React, {useState} from "react";
import LikeButton from "../LikeButton/LikeButton";

import CommentAndRating from "../Comments/CommentAndRating";
import Commentary from "../CommentsSection/Commentary";
import { useEffect } from "react";
import Rating from '../Rating/Rating.tsx'
import {likeRecipeRequest} from "../../api/util";

const RecipeModal = ({ recipe, visible, onClose, token }) => {

  console.log(recipe)

  const [isFavorite, setFavorite] = useState(false);
  const [rlikes, setrLikes] = useState(0);

  useEffect(() => {
    setrLikes(recipe.likes)
  }, [recipe])


  if (!visible) return null;


  const handleCloseClick = () => {
    onClose && onClose();
  };

  const handleSyncOnRating = () => {
    console.log()
  }

  return (
    <div className="transition-opacity ease-in duration-700 opacity-100 fixed inset-0 mx-8 mb-8 mt-32 p-10 backdrop-blur-sm bg-white global-shadow rounded-3xl max-h-max">
      <div className="p-4">
        <div className="flex justify-between">
          <div className="font-youngserif font-bold text-4xl pb-3">
            {recipe.name}
            <div className="flex">
              <div className={"mt-1"}>
                <LikeButton
                  //!TODO: Change to recipe.likes and recipes.isFavorite
                  likes={rlikes}
                  isFavorite={isFavorite}
                  action={async () => {
                    setFavorite((prevState => !prevState));
                    console.log({recipe_id: recipe.id, token});
                    await likeRecipeRequest({recipe_id: recipe.id, token}, token);
                    if(isFavorite){
                      setrLikes((prevLikes)=> prevLikes - 1)
                    } else {
                      setrLikes((prevLikes)=> prevLikes + 1)
                    }
                  }}
                />
              </div>
              <div className={"font-manrope font-bold text-xl my-3 align-middle"}>
                <Rating className={"ml-4 mb-2"} size="30" transition allowHalfIcon ratingValue={recipe.rating * 2 * 10} readonly={true}/>
                {recipe.rating ? recipe.rating.toFixed(1) : 0}
              </div>
            </div>
          </div>
          <button
            onClick={handleCloseClick}
            className={"font-arial font-extrabold text-2xl h-10"}
          >X</button>
        </div>
        <div className={"lg:flex lg:flex-auto"}>
          <div className="lg:w-5/12">
            <div>
              <img
                className="my-5 rounded-xl w-full h-[18rem] object-cover rounded-3xl"
                src={!!recipe.imageLink ? "http://localhost:8080/static/" + recipe.imageLink : "https://via.placeholder.com/250x140"}
                alt={"Recipe"}
              />
              <div className={"font-manrope font-bold text-xl my-3"}>
                Ingredientes
              </div>
              <div className={"w-3/4 text-md overflow-y-auto h-auto"}>
                <ul className="flex flex-wrap">
                  {recipe.ingredients.map((ingredient) => (
                    <li className="align-middle rounded-full bg-shadow py-1 px-3 m-1.5">{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12 lg:px-10">
            <div className={"col-span-1 font-manrope font-bold text-xl my-3"}>
              Instrucciones
            </div>
            <div className={"w-auto text-md overflow-auto"}>
              <ol className="list-decimal">
                {recipe.instructions.map((instruction) => (
                  <li className="font-manrope">{instruction}</li>
                ))}
              </ol>

            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-auto">
          <CommentAndRating recipe={recipe} token={token} onRating={handleSyncOnRating} />
          <div>{recipe.ratings?.map((comment) => <Commentary message={comment.comment} id={comment.id} rate={comment.rate} />)}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
