import React from "react";
import LikeButton from "../LikeButton/LikeButton";

const RecipeModal = ({ recipe, visible, onClose }) => {
  if (!visible) return null;

  const handleCloseClick = () => {
    onClose && onClose();
  };

  return (
    <div className="overflow-y-auto block fixed inset-0 mx-8 mb-8 mt-32 p-10 backdrop-blur-sm bg-white global-shadow rounded-3xl">
      <div className="px-3">
        <div className="flex justify-between">
          <div className="font-youngserif font-bold text-4xl pb-3">
            {recipe.name}
            <div>
              <LikeButton
                  //!TODO: Change to recipe.likes and recipes.isFavorite
                  likes={recipe.likes}
                  isFavorite={true}
              />
            </div>
          </div>
          <button
              label="Cerrar"
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
      </div>
    </div>
  );
};

export default RecipeModal;
