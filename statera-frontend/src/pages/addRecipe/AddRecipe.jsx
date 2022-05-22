import React, { Fragment, useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Input from "../../components/Input/Input";
import Panel from "../../layout/BasicLayout/Panel";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const RecipeForm = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      category: "",
      instructions: [""],
      ingredients: [""],
    },
  });

  const {
    fields: ingredientFields,
    append: ingredientAppend,
    remove: ingredientRemove,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const {
    fields: instructionFields,
    append: instructionAppend,
    remove: instructionRemove,
  } = useFieldArray({
    control,
    name: "instructions",
  });

  useEffect(() => {
    if (instructionFields.length < 1) {
      instructionAppend("");
    }

    if (ingredientFields.length < 1) {
      ingredientAppend("");
    }
  }, [
    instructionFields,
    instructionAppend,
    ingredientFields,
    ingredientAppend,
  ]);

  const onSubmit = async (data) => console.log(data);

  return (
    <Fragment>
      <h1 className="font-youngserif text-5xl leading-normal mt-2 sm:mt-10 mb-4 px-10">
        Crear Receta
      </h1>
      <form className="px-10" onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" title="Nombre" register={register("name")} />
        <Input type="text" title="Categoría" register={register("category")} />
        <Input type="file" title="Imagen" register={register("image")} />

        <div className="grid grid-cols-2 gap-5 h-full">
          <div className="my-5 overflow-scroll">
            <h2>Ingredientes</h2>

            {ingredientFields.map((item, index) => (
              <div className="flex" key={item.id}>
                <h2 className="w-1 px-3 py-4 my-3">{index + 1}. </h2>
                <Input
                  type="text"
                  register={register(`ingredients.${index}.ingredient`)}
                />
                {ingredientFields.length > 1 && (
                  <button
                    className="h-auto bg-beige px-2 py-2 my-5"
                    type="button"
                    onClick={() => ingredientRemove(index)}
                  >
                    -
                  </button>
                )}
              </div>
            ))}
            <button
              className="btn-regular w-full"
              type="button"
              onClick={() => ingredientAppend("")}
            >
              +
            </button>
          </div>

          <div className="my-5 overflow-scroll">
            <h2>Instrucciones</h2>

            {instructionFields.map((item, index) => (
              <div className="flex" key={item.id}>
                <h2 className="w-1 px-3 py-4 my-3">{index + 1}. </h2>
                <Input
                  type="text"
                  register={register(`instructions.${index}.instruction`)}
                />
                {instructionFields.length > 1 && (
                  <button
                    className="h-auto bg-beige px-2 py-2 my-5"
                    type="button"
                    onClick={() => instructionRemove(index)}
                  >
                    -
                  </button>
                )}
              </div>
            ))}

            <button
              className="btn-regular w-full"
              type="button"
              onClick={() => instructionAppend("")}
            >
              +
            </button>
          </div>
        </div>

        <PrimaryButton type="submit" label="Guardar" className="w-48 mt-10" />
      </form>
    </Fragment>
  );
};

const AddRecipe = (props) => {
  return (
    <Panel userName={"Peppa Perez"}>
      <RecipeForm />
    </Panel>
  );
};

export default AddRecipe;
