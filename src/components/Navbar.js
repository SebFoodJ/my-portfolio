import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';


export default function Navbar() {
    return(
        <header className="bg-indigo opacity-70 md:sticky top-0 z-10 hover:opacity-100">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <p className='font-medium text-lavender mb-4 md:mb-0'>
                    <h1 className="ml-3">
                        SEBASTIEN FOUGERE
                    </h1>
                </p>
                <nav className="md:ml-auto flex font-medium flex-wrap items-center text-lavender justify-center">
                    <a href="#projects" className="mr-5 hover:text-frenchgray">
                        Mes projets
                    </a>
                    <a href="#skills" className="mr-5 hover:text-frenchgray">
                        Techno & Skills
                    </a>
                    <a href="#testimonials" className="mr-5 hover:text-frenchgray">
                        Témoignages
                    </a>
                    <a href="#contact" className="mr-5 hover:text-frenchgray">
                        Contact
                    </a>
                </nav>
                <a
                    href="../myResume.pdf"
                    target="_blank"
                    className="inline-flex items-center bg-taupegray border-0 py-1 px-3 focus:outline-none hover:bg-indigo rounded text-lavender mt-4 md:mt-0">
                    Télécharger mon CV
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>

    );
}



