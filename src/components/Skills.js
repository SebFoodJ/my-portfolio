// src/components/Skills.js

import React from "react";
import { skills } from "../data/data";
import { BadgeCheckIcon, ChipIcon, CogIcon  } from "@heroicons/react/solid";

var languages = skills[0].language;
var competences = skills[1].competences;


export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-5">
                    <ChipIcon className="text-indigo w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-lavender mb-4">
                        Technologies
                    </h1>
                    <p className="text-frenchgray leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Voici les technologies que j'ai eu l'occasion d'expérimenter au cours de ma formation à Ada Tech School.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {languages.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-indigo bg-opacity-70 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className=" w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-lavender text-center">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mb-5 mt-20">
                    <CogIcon className="text-indigo w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-lavender mb-4">
                        Soft Skills
                    </h1>
                    <p className="text-frenchgray leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Voici mes compétences.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {competences.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-indigo bg-opacity-70 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className=" w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-lavender">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}