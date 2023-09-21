import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center animate-introtext">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-lavender">
                        Salut, Moi c'est <span className='text-indigo'>Sébastien</span>.
                        <br className="hidden lg:inline-block text-lavender" />Je suis étudiant en développement web.
                    </h1>
                    <p className="mb-8 leading-relaxed text-frenchgray drop-shadow-lg font-medium">
                        lnlk!sdnds!lknljnlkjgdlfkgkldnglknlkdfgnfdlgndln
                        <a href="https://adatechschool.fr/" className="text-strongblue font-bold hidden lg:inline-block title-font">Ada Tech School</a> <span role='img' aria-label=''>🤝</span>
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-lavender bg-indigo border-0 py-2 px-6 focus:outline-none hover:bg-frenchgray hover:text-indigo rounded text-lg"
                        >
                            Travaillons ensemble !
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-lavender bg-taupegray border-0 py-2 px-6 focus:outline-none hover:bg-silver hover:text-lavender rounded text-lg"
                        >
                            Voir mes projets
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate-pulse">
                    <img
                        className="object-cover object-center shadow-2xl rounded-full max-w-full h-auto align-middle border-none"
                        alt="profil"
                        src="./picofme2.png"
                    />
                </div>
            </div>
        </section>

    );

}