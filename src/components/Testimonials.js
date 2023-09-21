// src/components/Testimonials.js

import React from "react";
import { testimonials } from "../data/data";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";


export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className="text-indigo w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-lavender mb-12">
                    Témoignages
                </h1>
                <div className="flex flex-wrap m-4">
                    {testimonials.map((testimonial) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-indigo bg-opacity-70 p-8 rounded shadow-sm">

                                <p className="leading-relaxed mb-6 italic font-medium text-frenchgray">
                                    <TerminalIcon className="block w-8 text-frenchgray mb-4" />{testimonial.quote}
                                </p>
                                <div className="inline-flex items-center">
                                    <img
                                        alt="testimonial"
                                        src={testimonial.image}
                                        className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white text-left">
                                            {testimonial.name}
                                        </span>
                                        <span className="text-indigo-100 text-sm uppercase">
                                            {testimonial.company}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}