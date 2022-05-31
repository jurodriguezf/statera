import React, {useState} from "react";
import { FaStar } from "react-icons/fa";


const StarRating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
        <div>
            <div className="w-5/12">
                <div className="grid grid-cols-5 place-items-center">
                    {[...Array(5)].map((star, i)=> {
                        const ratingValue = i+1;
                        return <label>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                            />
                            <FaStar
                                className="star"
                                color={ratingValue<=(hover || rating) ? "#C2384F" : "#D9D9D9"}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                                size={50}
                            />
                        </label>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default StarRating;