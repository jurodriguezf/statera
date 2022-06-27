import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import Panel from "../../layout/BasicLayout/Panel";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { makeRecipesMenuRequest } from "../../api/util";
import RadioInput from "../../components/RadioInput/RadioInput";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeModal from "../../components/Recipes/RecipeModal";
import jwt_decode from "jwt-decode";

const MenuForm = (props) => {
  const { token } = props;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      quantity: 0,
    },
  });

  const [formWarning, setFormWarning] = useState("");
  const [menuRecipes, setMenuRecipes] = useState([]);
  const [modalContent, setModalContent] = useState({
    show: false,
    content: {},
  });

  const emptyFieldValidation = (value) => {
    if (!value || value === 0) {
      setFormWarning("Debes escoger una opción");
      return false;
    } else {
      setFormWarning("");
      return true;
    }
  };

  const onSubmit = async (formData) => {
    const obtainedMenuRecipes = await makeRecipesMenuRequest(formData, token, jwt_decode(token)["_id"]);
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
            register={register("quantity", {
              validate: emptyFieldValidation,
            })}
          />
          <RadioInput
            className="w-1/3"
            type="radio"
            label="Fin de semana (dos recetas)"
            value={2}
            register={register("quantity", {
              validate: emptyFieldValidation,
            })}
          />
          <RadioInput
            className="w-1/3"
            type="radio"
            label="Una semana (cinco recetas)"
            value={5}
            register={register("quantity", {
              validate: emptyFieldValidation,
            })}
          />
        </div>

        <div className={"flex-wrap my-10 mx-60"}>
          <PrimaryButton type="submit" label="Crear menú" className="mt-10" />
        </div>
      </form>

      <div className="w-full flex justify-center">
        <h3 className="text-center flex font-manrope font-bold text-sm text-wine">
          {formWarning}
        </h3>
      </div>

      <div className="p-16 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {menuRecipes?.map((recipe) => (
          <RecipeCard
            name={recipe.name}
            category={recipe.category || "Sin categoría"}
            onClick={() => setModalContent({ show: true, content: recipe })}
            image={recipe.imageLink}
            rating={recipe.rating}
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
    <Panel token={token} currentPage={"Crear Menú"}>
      <MenuForm token={token} />
    </Panel>
  );
};
export default GetMenu;
