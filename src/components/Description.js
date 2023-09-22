import React from "react";

export default function Description() {
    return (
        <section id="description" className="px-30 my-50">
            <div className="flex flex-wrap items-center px-10">
                <div className="w-full md:w-1/3 px-20">
                    <img
                        className="w-full"
                        alt="a propos"
                        src="./apropos.svg"
                    />
                </div>
                <div className="md:w-2/3 px-10 place-self-center">
                    <h1 className="text-3xl text-white font-bold mb-4">
                        A propos de moi...
                    </h1>
                    <p className="mb-4">
                        "Étudiant à{" "}
                        <a
                            href="https://adatechschool.fr/"
                            target="_blank"
                            className="text-indigo font-bold"
                        >
                            Ada Tech School
                        </a>
                        , une école à la pédagogie alternative qui valorise la pratique
                        et les projets collectifs, j'ai eu l'opportunité de travailler sur{" "}
                        <b className="text-white">6 projets collectifs en l'espace de 8 mois</b>. Ces projets,
                        rythmés par des rituels issus de la{" "}
                        <b className="text-white">méthodologie Agile</b>, m'ont permis de développer des
                        compétences essentielles pour le monde professionnel.
                    </p>
                    <p className="mb-4">
                        Au fil de mes expériences professionnelles, j'ai exploré
                        différentes voies, notamment en{" "}
                        <b className="text-white">Événementiel</b> au sein d'une agence de
                        communication, puis en tant que <b className="text-white">Chef de Cuisine</b> dans des
                        restaurants gastronomiques et bistronomiques.
                    </p>
                    <p className="mb-4">
                        Mes réorientations sont le résultat de mon{" "}
                        <b className="text-white">désir constant d'acquérir de nouvelles compétences</b> et de
                        m'adapter à de nouveaux environnements. Ma{" "}
                        <b className="text-white">curiosité</b> est mon moteur, et elle m'incite à
                        rechercher en permanence de nouvelles connaissances."
                    </p>
                </div>
            </div>
        </section>
    );
}
