import React from 'react';
import {Popover, PopoverContent, PopoverHandler} from "@material-tailwind/react";

const RecipeCard = (props) => {

  return (
      <Popover placement={"bottom-start"}>
          <PopoverHandler>
              <button>
                  <div>
                      <img className="rounded-3xl drop-shadow-lg" src="https://via.placeholder.com/350x200" alt="Food image"/>
                  </div>
                  <div className="p-3">
                      <div className="font-bold font-manrope text-xl text-left">{props.name}</div>
                      <div className="font-bold font-manrope text-base text-left text-gray-400">{props.category}</div>
                  </div>
              </button>
          </PopoverHandler>
          <PopoverContent className={"drop-shadow-lg"}>
              <div className={"p-4"}>
                  <div className={"flex justify-between"}>
                      <div className={"font-youngserif font-bold text-3xl mr-40"}>
                          {props.name}
                      </div>
                      <div className={"font-manrope font-extrabold text-2xl"}>

                      </div>
                  </div>
                  <div className={"grid grid-cols-2 gap-5 py-4"}>
                      <div>
                          <div className={"font-manrope font-bold text-xl my-3"}>
                              Ingredientes
                          </div>
                          <div className={"w-3/4 text-xl"}>
                              {props.ingredients}
                          </div>
                      </div>
                      <div>
                          <div className={"col-span-1 font-manrope font-bold text-xl my-3"}>
                              Instrucciones
                          </div>
                          <div className={"w-3/4 text-xl"}>
                              {props.instructions}
                          </div>
                      </div>

                  </div>
              </div>
          </PopoverContent>
      </Popover>
  )
}
export default RecipeCard;
