import React from "react";

export default function Description() {
    return(
        <section id="description" className="text-gray-400 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-5">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        A propos de moi
                    </h1>
                    <div className="italic">
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-3">
                        "Étudiant à <a href="https://adatechschool.fr/" target="_blank" className="text-lavender font-bold hidden lg:inline-block title-font">Ada Tech School</a>, une école à la pédagogie alternative qui valorise la pratique et les projets collectifs, 
                        j'ai eu l'opportunité de travailler sur 6 projets collectifs en l'espace de 8 mois. Ces projets, rythmés par des rituels issus de la méthodologie Agile, m'ont permis de développer des compétences essentielles pour le monde professionnel. 
                    </p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-3"> 
                        Au fil de mes expériences professionnelles, j'ai exploré différentes voies, notamment en Événementiel au sein d'une agence de communication, puis en tant que Chef de Cuisine dans des restaurants gastronomiques et bistronomiques .
                    </p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> 
                        Mes réorientations sont le résultat de mon désir constant d'acquérir de nouvelles compétences et de m'adapter à de nouveaux environnements.  
                        Ma curiosité est mon moteur, et elle m'incite à rechercher en permanence de nouvelles connaissances."
                    </p>
                    </div>
                </div>
            </div>
        </section>


    )
}