import React from "react";
import StarRating from "../StarRating/StarRating";


const Comentary = ({message, rate, id}) => {
    console.log(message,rate,id)
    return (
        <div className="flex ml-10 my-8">
                <div className="w-5/12 mr-6">
                    <div className="col-span-1 font-manrope font-bold text-xl mb-3">
                        id
                    </div>
                    <img
                        alt="The current recipe"
                        className="object-cover rounded-3xl drop-shadow-lg w-[150px] h-[80px]"
                        src="https://via.placeholder.com/350x200"
                    />
                </div>
                <div className="w-8/12">
                    <StarRating value={rate}/>
                    <div className="mt-6">
                        {message}
                    </div>
                </div>
            </div>
    );
}

export default Comentary