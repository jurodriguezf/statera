import React from "react";
import { FaStar } from "react-icons/fa";


const StarRating = (value) => {
    const rating = value.value
    const sizeStar = 20
    return (
        <div>
            <div className="">
                <div className="flex space-x-5">
                    {[...Array(5)].map((star, i)=> {
                        const ratingValue = i+1;
                        return <label>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                            />
                            <FaStar
                                className="star"
                                color={ratingValue<=(rating) ? "#C2384F" : "#D9D9D9"}
                                size={sizeStar}
                            />
                        </label>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default StarRating;
