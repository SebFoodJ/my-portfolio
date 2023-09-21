import React from "react";

export default function Description() {
    return(
        <section id="description" className="text-gray-400 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-5">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        A propos de moi
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Je suis actuellement étudiant en développement web à <a href="https://adatechschool.fr/" target="_blank" className="text-lavender font-bold hidden lg:inline-block title-font">Ada Tech School</a>.<br/>
                        Je suis à la recherche d'une alternance pour la rentrée 2023.<br/>
                        Je suis passionné par le développement web et je souhaite en faire mon métier.<br/>
                        Je suis curieux, autonome et j'aime travailler en équipe.<br/>
                        Je suis à l'écoute de toutes propositions.<br/>
                        N'hésitez pas à me contacter pour plus d'informations.<br/>
                    </p>
                </div>
            </div>
        </section>


    )
}