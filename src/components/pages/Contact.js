import React, { useRef } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { BiMailSend } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { TiWarning } from "react-icons/ti";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q185j3i",
        "template_wu4n2ah",
        form.current,
        "r-G9yXAZylDwsaeoH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire("Félicitation!", "Votre mail a bien été envoyé!", "success");
    e.target.reset();
  };
  return (
    <>
      <div className="z-10 relative">
        <Navbar />
      </div>
      <div className="text-center my-10">
        <h1 className="text-2xl font-bold text-white inline-block bg-white bg-opacity-20 rounded-full shadow-md py-3 px-4">
          <BiMailSend size={40} />
        </h1>
      </div>
      <div className="flex justify-center my-10">
        <div className="container text-center border border-white border-opacity-10 shadow-2xl rounded-2xl mx-10 max-w-3xl formBG">
          <div className="p-5 py-10 space-y-5">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid gap-5">
                <input
                  name="user_name"
                  type="text"
                  className="border text-black border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-600 col-span-2"
                  placeholder="Nom et prénom"
                  required
                />
                <input
                  name="user_email"
                  type="email"
                  className="border text-black border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-600 col-span-2"
                  placeholder="Email"
                  required
                />
                <input
                  name="user_phone"
                  type="tel"
                  className="border text-black border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-600 col-span-2"
                  placeholder="Tel."
                  required
                />
                <textarea
                  name="message"
                  cols="8"
                  rows="8"
                  className="border text-black border-white rounded-xl px-4 py-2 focus:outline-none focus:border-blue-600 col-span-2"
                  placeholder="Ecrivez votre message..."
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Envoyer"
                className="mt-5 text-center rounded-xl border cursor-pointer bg-transparent hover:text-black hover:bg-white hover:transition-all duration-700 px-20 py-2 text-white font-bold "
              />
            </form>

            <div className="flex flex-row justify-center items-center">
              <TiWarning size={24} color="yellow" />
              <p className="ml-3 font-bold">Tous les champs sont requis</p>
            </div>
            <p className="text-blue-100 ml-3 text-sm">
              N'hésitez pas à nous contacter par téléphone ou par mail si vous
              rencontrez des problèmes avec le formulaire.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
