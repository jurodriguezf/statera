import React from "react";

const RecipeCard = (props) => {
  const getImagePath = (fileName) =>
    !!fileName
      ? "http://localhost:8080/static/" + fileName
      : "https://via.placeholder.com/350x200";

  return (
    <div className="grow">
      <div>
        <img
          alt="The current recipe"
          className="object-cover rounded-3xl drop-shadow-lg w-[350px] h-[200px]"
          src={getImagePath(props.image)}
        />
      </div>
      <div className="m-3">
        <div className="font-bold font-manrope text-xl ">{props.name}</div>
        <div className="font-bold font-manrope text-base text-gray-400">
          {props.category}
        </div>
      </div>
    </div>
  );
};
export default RecipeCard;
