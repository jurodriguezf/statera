import React, { Fragment, useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Input from "../../components/Input/Input";
import Panel from "../../layout/BasicLayout/Panel";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { makeAddRecipeRequest, makeRecipesMenuRequest } from "../../api/util";
import RadioInput from "../../components/RadioInput/RadioInput";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeModal from "../../components/Recipes/RecipeModal";

const MenuForm = (props) => {
  const { token } = props;
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      quantity: 0,
    },
  });

  const [menuRecipes, setMenuRecipes] = useState([]);
  const [modalContent, setModalContent] = useState({
    show: false,
    content: {},
  });

  const onSubmit = async (formData) => {
    console.log(formData);
    const obtainedMenuRecipes = await makeRecipesMenuRequest(formData, token);
    setMenuRecipes(obtainedMenuRecipes);
  };

  return (
    <Fragment>
      <h1 className="font-youngserif text-5xl leading-normal mt-2 sm:mt-10 mb-4 px-10">
        Obtener un menú
      </h1>
      <div
        className={
          "font-manrope font-bold text-2xl leading-normal mt-2 sm:mt-10 ml-10"
        }
      >
        <h1 className="">¿De qué tamaño?</h1>
      </div>
      <form
        className="px-10"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center px-40">
          <RadioInput
            className="w-1/3"
            type="radio"
            label="Una receta"
            value={1}
            register={register("quantity")}
          />
          <RadioInput
            className="w-1/3"
            type="radio"
            label="Fin de semana (dos recetas)"
            value={2}
            register={register("quantity")}
          />
          <RadioInput
            className="w-1/3"
            type="radio"
            label="Una semana (cinco recetas)"
            value={5}
            register={register("quantity")}
          />
        </div>

        <div className={"flex-wrap my-10 mx-60"}>
          <PrimaryButton type="submit" label="Crear menú" className="mt-10" />
        </div>
      </form>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {menuRecipes?.map((recipe) => (
          <RecipeCard
            name={recipe.name}
            category={recipe.category || "Sin categoría"}
            onClick={() => setModalContent({ show: true, content: recipe })}
            image={recipe.imageLink}
          />
        ))}
        <RecipeModal
          visible={modalContent.show}
          recipe={modalContent.content}
          onClose={() => setModalContent({ show: false, content: {} })}
        />
      </div>
    </Fragment>
  );
};

const GetMenu = (props) => {
  const { token } = props;

  return (
    <Panel token={token} currentPage={"Crear Receta"}>
      <MenuForm token={token} />
    </Panel>
  );
};
export default GetMenu;
