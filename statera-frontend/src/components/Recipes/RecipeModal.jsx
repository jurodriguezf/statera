import React, { useRef } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import IconButton from "../IconButton/IconButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import StarRating from "../../components/StarRating/StarRating";
import CommentSection from "../../pages/Comments/CommentSection";

const RecipeModal = ({ recipe, visible, onClose, token }) => {

  const comment = useRef();
  if (!visible) return null;
  

  const handleCloseClick = () => {
    onClose && onClose();
  };
  


  return (
    <div className="transition-opacity ease-in duration-700 opacity-100 fixed inset-0 mx-8 mb-8 mt-32 p-10 backdrop-blur-sm bg-white global-shadow rounded-3xl max-h-max">
      <div className="p-4">
        <div className="flex justify-between">
          <div className="font-youngserif font-bold text-4xl mr-40 pb-3">
            {recipe.name}
          </div>
          <button
              label="Cerrar"
              onClick={handleCloseClick}
              className={"font-manrope font-extrabold text-2xl"}
          >X</button>
        </div>
        <div className={"lg:flex lg:flex-auto"}>
          <div className="lg:w-5/12">
            <div>
              <img className="my-5 rounded-xl w-full h-[18rem] object-cover rounded-3xl" src={!!recipe.imageLink ? "http://localhost:8080/static/" + recipe.imageLink : "https://via.placeholder.com/250x140"}/>
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
        <div className="flex">
          <div className="w-3/12 ml-8 mt-8 mb-8">
            <div className="w-9/12 m-8">
                    <div className={"col-span-1 font-manrope font-bold text-xl my-3 h-96"}>
                        ¿Qué piensa usted de esta receta?
                        <div className="mt-10 mb-2">
                            <StarRating/>
                        </div>
                        <div className="grid grid-cols-3 mb-10">
                            <div>
                                Malo
                            </div>
                            <div>
                                Excelente
                            </div>
                        </div>
                        <div className="mb-3 xl:w-96 h-full">
                            <div className="grid space-y-5">
                                <textarea className="form-control w-full border-2 resize-none outline-none rounded-md border-wine border-solid p-3 "
                                    placeholder="Esta receta es..."
                                    maxLength={200}
                                    onInput={(e) => {
                                        const minHeight = 200
                                        comment.current.style.height = ""
                                        comment.current.style.height = Math.min(comment.current.scrollHeight,minHeight)+"px"
                                    }}
                                    ref={comment}
                                />
                                 <PrimaryButton type="submit" link={"/"} label="Enviar"/>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
