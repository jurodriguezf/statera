import React, {useEffect, useState} from "react";

import Panel from "../../layout/BasicLayout/Panel";
import Input from "../../components/Input/Input";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const AddRecipe = (props) => {

    const [inputFieldsIngredients, setInputFieldIngredient] = useState([
        {ingredient : ""}
    ])

    const [inputFieldsInstructions, setInputFieldInstruction] = useState([
        {instruction : ""}
    ])

    const addFieldIngredient = () => {
        setInputFieldIngredient([...inputFieldsIngredients, {ingredient : ""}])
    }

    const removeFieldIngredient = () => {
        const values = [...inputFieldsIngredients]
        values.splice(inputFieldsIngredients.length-1, 1)
        setInputFieldIngredient(values)
    }

    const addFieldInstruction = () => {
      setInputFieldInstruction([...inputFieldsInstructions, {instruction : ""}])
    }

    const removeFieldInstruction = () => {
        const values = [...inputFieldsInstructions]
        values.splice(inputFieldsInstructions.length-1, 1)
        setInputFieldInstruction(values)
    }

    return (
        <Panel userName={"Peppa Perez"}>
            <div className={"px-10"}>
                <div className={"font-youngserif text-5xl leading-normal mt-2 sm:mt-10 mb-4"}>
                    <h1>Crear Receta</h1>
                </div>

                <div className={"mt-5"}>
                    <div className={"font-bold text-2xl"}>
                        <h2>Nombre Receta</h2>
                    </div>
                    <div className={"px-3 w-80"}>
                        <Input/>
                    </div>
                </div>
                <div className={"mt-5"}>
                    <div className={"font-bold text-2xl"}>
                        <h2>Ingredientes</h2>
                    </div>
                    <div className={"px-3 w-80"}>
                        {inputFieldsIngredients.map((inputFieldIngredient, index) =>(
                            <div  className="grid grid-cols-[40px_minmax(12px,_1fr)]" >
                                <div className={"px-3 py-4 text-2xl"}><h2>{index+1}. </h2></div>
                                <div><Input /></div>
                            </div>
                        ))}
                        <div className="grid grid-cols-2 gap-4">
                            <div><button className="btn-regular" onClick={()=> addFieldIngredient()}>+</button></div>
                            <div><button className="btn-regular" onClick={()=> removeFieldIngredient()}>-</button></div>
                        </div>
                    </div>
                </div>
                <div className={"mt-5"}>
                    <div className={"font-bold text-2xl" }>
                        <h2>Instrucciones</h2>
                    </div>
                    <div className={"px-3 w-80"}>
                        {inputFieldsInstructions.map((inputFieldInstruction, index) =>(
                            <div  className="grid grid-cols-[40px_minmax(12px,_1fr)]" >
                                <div className={"px-3 py-4 text-2xl"}><h2>{index+1}. </h2></div>
                                <div><Input /></div>
                            </div>
                        ))}
                        <div className="grid grid-cols-2 gap-4">
                            <div><button className="btn-regular" onClick={()=> addFieldInstruction()}>+</button></div>
                            <div><button className="btn-regular" onClick={()=> removeFieldInstruction()}>-</button></div>
                        </div>
                    </div>
                </div>

                <div className={"w-48 mt-10"}>
                    <PrimaryButton type="submit" label="Guardar" className=""/>
                </div>
            </div>
        </Panel>
    );
}

export default AddRecipe
