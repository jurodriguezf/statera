import React from "react";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import HomeButtonText from "../HomeButton/HomeButtonText";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import HomeButtonNoText from "../HomeButton/HomeButtonNoText";

const pages = [
    {
        name: 'Inicio',
        description: 'CHANGE THIS IN THE FUTURE',
        href: '#'
    },
    {
        name: 'Nosotros',
        description: 'CHANGE THIS IN THE FUTURE',
        href: '#'
    },
    {
        name: 'Page',
        description: 'CHANGE THIS IN THE FUTURE',
        href: '#'
    },
    {
        name: 'Page',
        description: 'CHANGE THIS IN THE FUTURE',
        href: '#'
    }
]

const WelcomeHeader = () => {
    return (
        <Popover className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center pt-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <HomeButtonText/>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-wine">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <a className={"tab-item-active"} href={'#'}>
                            Active
                        </a>
                        {pages.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="tab-item"
                            >
                                {item.name}
                            </a>
                        ))}
                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <div>
                            <SecondaryButton label={"Inicia sesión"}/>
                        </div>
                        <div>
                            <PrimaryButton label="Regístrate"/>
                        </div>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 mb-60">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <HomeButtonNoText/>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-wine">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a className={"tab-item-active"} href={'#'}>
                                    Active
                                </a>
                                {pages.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="tab-item"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className={"grid place-items-center"}>
                                <div className={"w-2/4"}>
                                    <PrimaryButton label="Regístrate"/>
                                </div>
                                <div className={"w-2/4 flex justify-center"}>
                                    <SecondaryButton label={"Inicia sesión"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default WelcomeHeader