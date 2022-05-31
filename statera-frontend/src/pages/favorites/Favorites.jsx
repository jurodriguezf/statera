import React from 'react';
import Panel from "../../layout/BasicLayout/Panel";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const Favorites = () => {
    return (
        <Panel userName={"Peppa Perez"} currentPage={"Favoritos"}>
            <div className="px-10">
                <div className={"grid grid-cols-2 justify-between mt-2 sm:mt-10 mb-4"}>
                    <div className={"font-youngserif text-5xl leading-normal"}>
                        <h1>Favoritos</h1>
                    </div>
                    <SearchBar/>
                </div>
                <div className={"font-manrope font-bold text-2xl leading-normal mt-2 sm:mt-10 mb-4"}>
                    <h1>Tus recetas favoritas</h1>
                </div>
                <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
                    <RecipeCard name="Fríjoles con kumis"
                                category="Ensalada"
                                ingredients="Huevos, Tomate, Cebolla, Sal, Aceite"
                                instructions="1. Never gonna give you up"/>
                    <RecipeCard name="Fríjoles con kumis"
                                category="Ensalada"
                                ingredients="Huevos, Tomate, Cebolla, Sal, Aceite"
                                instructions="1. Never gonna give you up"/>
                    <RecipeCard name="Fríjoles con kumis"
                                category="Ensalada"
                                ingredients="Huevos, Tomate, Cebolla, Sal, Aceite"
                                instructions="1. Never gonna give you up"/>
                    <RecipeCard name="Fríjoles con kumis"
                                category="Ensalada"
                                ingredients="Huevos, Tomate, Cebolla, Sal, Aceite"
                                instructions="1. Never gonna give you up"/>
                    <RecipeCard name="Fríjoles con kumis"
                                category="Ensalada"
                                ingredients="Huevos, Tomate, Cebolla, Sal, Aceite"
                                instructions="1. Never gonna give you up"/>
                    <RecipeCard name="Fríjoles con kumis"
                                category="Ensalada"
                                ingredients="Huevos, Tomate, Cebolla, Sal, Aceite"
                                instructions="1. Never gonna give you up"/>
                    <RecipeCard name="Fríjoles con kumis"
                                category="Ensalada"
                                ingredients="Huevos, Tomate, Cebolla, Sal, Aceite"
                                instructions="1. Never gonna give you up"/>
                    <RecipeCard name="Fríjoles con kumis"
                                category="Ensalada"
                                ingredients="Huevos, Tomate, Cebolla, Sal, Aceite"
                                instructions="1. Never gonna give you up"/>
                </div>
            </div>
        </Panel>
    )
}

export default Favorites;
