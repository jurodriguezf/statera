import React, {useEffect, useRef, useState} from "react";

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
            </div>
        </Panel>
    );
}

export default CommentSection