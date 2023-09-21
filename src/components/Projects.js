// src/components/Projects.js

import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data/data";




export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-5">
                    <CodeIcon className="text-indigo mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Mes projets
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Voici quelques projets réalisés au cours de formation à Ada Tech School.
                    </p>
                </div>
                <div className="flex flex-nowrap -m-4 rounded ">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 w-100 p-4 rounded">
                            <div className="flex relative rounded">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center rounded"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 rounded bg-indigo opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-frenchgray mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-lavender mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed text-lavender">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}