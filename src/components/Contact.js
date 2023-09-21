// src/components/Contact.js

import React, {useRef} from "react";
import emailjs from '@emailjs/browser';






export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        //s'assurer que le nom et le message soit remplis, et soit le numero soit l'email soit remplis, si non, ne pas envoyer le mail
        if (form.current.user_name.value === '' || form.current.message.value === '' || (form.current.user_email.value === '' && form.current.user_phoneNum.value === '')) {
            alert('Veuillez remplir les champs obligatoires');
            return false;
        }
        //si le numero est remplis, s'assurer qu'il soit valide
        if (form.current.user_phoneNum.value !== '') {
            if (form.current.user_phoneNum.validity.patternMismatch) {
                alert('Veuillez entrer un numéro de téléphone valide');
                return false;
            }
        }
        //si l'email est remplis, s'assurer qu'il soit valide
        if (form.current.user_email.value !== '') {
            if (form.current.user_email.validity.patternMismatch) {
                alert('Veuillez entrer une adresse email valide');
                return false;
            }
        }
        //si tout est ok, envoyer le mail


        emailjs.sendForm('contact_service', 'contact_form', form.current, 'Uf7jv8sCKsV8qdaJO')
            .then((result) => {
                //faire apparaitre un message de confirmation
                alert("Votre message a bien été envoyé !");
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    };




    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-darkgray rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=4+Rue+du+Puits+d'Argent,+Nantes,+France&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="bg-darkgray relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-3/5 px-6">
                            <h2 className="title-font font-semibold text-lavender tracking-widest text-xs">
                                ADRESSE
                            </h2>
                            <p className="mt-1">
                                4 rue du Puits d'Argent <br/>
                                44000 Nantes
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-lavender tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <p className="text-frenchgray leading-relaxed" href="#" >
                                sebastien.fougere@gmail.com
                            </p>
                            <h2 className="title-font font-semibold text-lavender tracking-widest text-xs mt-4">
                                TÉLÉPHONE
                            </h2>
                            <p className="leading-relaxed">07 67 79 59 67</p>
                        </div>
                    </div>
                </div>
                <form
                    ref={form}
                    name="contact"
                    onSubmit={sendEmail}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contactez-moi
                    </h2>
                    <p className="leading-relaxed mb-5">
                        N'hésitez pas à me contacter pour toute question.
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Nom
                        </label>
                        <input
                            type="text"
                            required="required"
                            id="name"
                            name="user_name"
                            className="w-full bg-silver rounded border border-taupegray focus:border-indigo focus:ring-2 focus:ring-indigo text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            required="required"
                            id="email"
                            name="user_email"
                            className="w-full bg-silver rounded border border-taupegray focus:border-indigo focus:ring-2 focus:ring-indigo text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="phoneNum" className="leading-7 text-sm text-gray-400">
                            Numéro de téléphone
                        </label>
                        <input
                            type="tel"
                            pattern="[0-9]{10}"
                            id="phoneNum"
                            name="user_phoneNum"
                            className="w-full bg-silver rounded border border-taupegray focus:border-indigo focus:ring-2 focus:ring-indigo text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            required="required"
                            name="message"
                            className="w-full bg-silver rounded border border-taupegray focus:border-indigo focus:ring-2 focus:ring-indigo h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"

                        />
                    </div>

                    <button
                        type="submit"
                        value='Send'
                        className="text-lavender font-medium bg-indigo border-0 py-2 px-6 focus:outline-none hover:bg-taupegray rounded text-lg">
                        Envoyer
                    </button>
                </form>
            </div>
        </section>
    );
}