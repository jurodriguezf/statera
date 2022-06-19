import React from "react";
import Rating  from '../Rating/Rating.tsx'


const RecipeCard = (props) => {
  const getImagePath = (fileName) =>
    !!fileName
      ? "http://localhost:8080/static/" + fileName
      : "https://via.placeholder.com/350x200";

  return (
    <div className="grow transition ease-in-out delay-100 hover:scale-105 duration-100" onClick={props.onClick}>
      <div>
        <img
          alt="The current recipe"
          className="object-cover rounded-3xl drop-shadow-lg w-[250px] h-[150px]"
          src={getImagePath(props.image)}
        />
      </div>
      <div className="m-3">
        <div className="font-bold font-manrope text-xl ">{props.name}</div>
        <Rating size="20" transition allowHalfIcon ratingValue={props.rating*2*10} readonly={true}></Rating>
        <div className="font-bold font-manrope text-base text-gray-400">
          {props.category}
        </div>
      </div>
    </div>
  );
};
export default RecipeCard;
