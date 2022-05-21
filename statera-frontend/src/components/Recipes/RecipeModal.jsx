import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const RecipeModal = ({ recipe, visible, onClose }) => {
  if (!visible) return null;

  const handleCloseClick = () => {
    onClose && onClose();
  };

  return (
    <div className="m-5 rounded-3xl bg-white fixed inset-0 flex items-center justify-center">
      <div className="p-4">
        <div className="flex justify-between">
          <div className="font-youngserif font-bold text-3xl mr-40">
            {recipe.name}
          </div>
          <PrimaryButton
              label="Cerrar"
              onClick={handleCloseClick}
              className={"font-manrope font-extrabold text-2xl"}
          />
        </div>
        <div className={"grid grid-cols-2 gap-5 py-4"}>
          <div>
            <div className={"font-manrope font-bold text-xl my-3"}>
              Ingredientes
            </div>
            <div className={"w-3/4 text-xl"}>
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className={"col-span-1 font-manrope font-bold text-xl my-3"}>
              Instrucciones
            </div>
            <div className={"w-3/4 text-xl"}>
              <ul>
                {recipe.instructions.map((instruction) => (
                  <li>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
