import React from "react";
import WelcomeHeader from "../../components/Header/WelcomeHeader";
import {Popover} from "@headlessui/react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const Welcome = () => {
    return (
        <Popover.Group>
            <WelcomeHeader/>
            <Popover className="relative bg-white">
                <div className={"max-w-7xl px-4 sm:px-6 mt-5 sm:mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2"}>
                    <div>
                        <h1 className={"font-youngserif text-6xl leading-normal mt-2 sm:mt-10 mb-4"}>
                            Nuevos sabores, todos los días
                        </h1>
                        <p className={"font-manrope font-medium text-lg text-gray-500 mt-3 mb-6 pr-20"}>
                            Encuentra nuevas ideas para cocinar con los ingredientes que compras habitualmente
                        </p>
                        <div className={"w-48 mb-7"}>
                            <PrimaryButton label="Comienza ahora"/>
                        </div>
                    </div>
                    <div>
                        <img src="images/welcome-page-vegetable.jpg" alt="" className="object-cover h-full w-full rounded-3xl" />
                    </div>

                </div>
            </Popover>

        </Popover.Group>
    );
};

export default Welcome
