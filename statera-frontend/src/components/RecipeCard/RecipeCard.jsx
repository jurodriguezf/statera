import React from 'react';

const RecipeCard = (props) => {

  return (
    <div className="p-3 m-5">
      <div >
        <img className="rounded-3xl" src="https://via.placeholder.com/350x200"/>
      </div>
      <div className="m-3">
        <div className="font-bold font-manrope text-xl ">{props.name}</div>
        <div className="font-bold font-manrope text-base text-gray-400">{props.category}</div>
      </div>
    </div>
  )
}
export default RecipeCard;
