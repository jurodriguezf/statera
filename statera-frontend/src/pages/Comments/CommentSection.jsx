import React, {useEffect, useState} from "react";

import Panel from "../../layout/BasicLayout/Panel";
import Input from "../../components/Input/Input";
import {makeProfileRequest} from "../../api/util";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import StarRating from "../../components/StarRating/StarRating";

const CommentSection = (props) => {
    const { token } = props;
    return (
        <Panel currentPage={"Home"} userName={"Peppa Perez"}>
            <div className="px-10">
                <div
                    className={
                        "flex mt-2 sm:mt-10"
                    }
                >
                    <h1 className="w-7/12 font-youngserif text-5xl leading-normal">Agrega tu comentario</h1>
                </div>
            </div>
            <div className={"flex"}>
                <div className="w-4/12 m-8">
                    <div className="font-youngserif font-bold text-3xl mr-10 pb-3">
                        Huevos Pericos
                    </div>
                    <img className="my-5 rounded-xl w-[250px] h-[140px] object-cover" src={"https://via.placeholder.com/250x140"}/>
                </div>
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
                            <textarea className="form-control block w-full border border-solid border-gray-300 h-full"
                                placeholder="Esta receta es..."
                            />
                        </div>
                        <div className={"w-48 mt-10 ml-20"}>
                            <PrimaryButton type="submit" link={"/"} label="Enviar" className=""/>
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
    );
}

export default CommentSection