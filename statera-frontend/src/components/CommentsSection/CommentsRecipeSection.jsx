import React from "react";
import StarRating from "../StarRating/StarRating";


const CommentsRecipeSection = (name) => {

    return (
        <div>
            <div className="flex ml-10 my-8">
                <div className="w-5/12 mr-6">
                    <div className="col-span-1 font-manrope font-bold text-xl mb-3">
                        Peppeyuela
                    </div>
                    <img
                        alt="The current recipe"
                        className="object-cover rounded-3xl drop-shadow-lg w-[150px] h-[80px]"
                        src="https://via.placeholder.com/350x200"
                    />
                </div>
                <div className="w-8/12">
                    <StarRating value={5}/>
                    <div className="mt-6">
                        Excelente receta, le doy un 5 estrellas
                    </div>
                </div>
            </div>
            <div className="flex ml-10 my-8">
                <div className="w-5/12 mr-6">
                    <div className="col-span-1 font-manrope font-bold text-xl mb-3">
                        jbcamacho1999
                    </div>
                    <img
                        alt="The current recipe"
                        className="object-cover rounded-3xl drop-shadow-lg w-[150px] h-[80px]"
                        src="https://via.placeholder.com/350x200"
                    />
                </div>
                <div className="w-8/12">
                    <StarRating value={4}/>
                    <div className="mt-6">
                        Buena receta
                    </div>
                </div>
            </div>
            <div className="flex ml-10 my-8">
                <div className="w-5/12 mr-6">
                    <div className="col-span-1 font-manrope font-bold text-xl mb-3">
                        cacaicedo23
                    </div>
                    <img
                        alt="The current recipe"
                        className="object-cover rounded-3xl drop-shadow-lg w-[150px] h-[80px]"
                        src="https://via.placeholder.com/350x200"
                    />
                </div>
                <div className="w-8/12">
                    <StarRating value={1}/>
                    <div className="mt-6">
                        No me gusto para nada esta receta
                    </div>
                </div>
            </div>
            <div className="flex ml-10 my-8">
                <div className="w-5/12 mr-6">
                    <div className="col-span-1 font-manrope font-bold text-xl mb-3">
                        AwAdePanela72
                    </div>
                    <img
                        alt="The current recipe"
                        className="object-cover rounded-3xl drop-shadow-lg w-[150px] h-[80px]"
                        src="https://via.placeholder.com/350x200"
                    />
                </div>
                <div className="w-8/12">
                    <StarRating value={3}/>
                    <div className="mt-6">
                        Me gusto esta receta
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentsRecipeSection