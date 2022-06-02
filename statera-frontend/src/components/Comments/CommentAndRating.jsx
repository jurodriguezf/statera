import React, {useRef, useState} from "react";

import PrimaryButton from "../PrimaryButton/PrimaryButton";
import {FaStar} from "react-icons/fa";
import {useForm} from "react-hook-form";

const CommentAndRating = ({recipe}) => {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [commentary, setCommentary] = useState('')
    const comment = useRef();

    const {handleSubmit, setValue} = useForm({
        defaultValues: {
            recipeID: '',
            numberOfStars: '',
            commentary: ''
        }
    })

    const handleCommentaryChange = event => {
        setCommentary(event.target.value)
    };

    const setAllValues = event => {
        setValue("recipeID", recipe.id)
        setValue("numberOfStars", rating)
        setValue("commentary", commentary)
    }

    const onSubmit = async (data) => {
        console.log(data)
    }
    
    return (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex">
                <div className="w-6/12 mt-8 mb-8 place-content-center">
                    <div className="m-8">
                        <div className={"col-span-1 font-manrope font-bold text-xl my-3 h-96"}>
                            ¿Qué piensa usted de esta receta?
                            <div className="mt-10 mb-2">
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
                            </div>
                            <div className="flex space-x-60">
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
                                          value={commentary}
                                          onChange={handleCommentaryChange}
                                />
                                    <PrimaryButton onClick={setAllValues} type="submit" label="Enviar"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default CommentAndRating