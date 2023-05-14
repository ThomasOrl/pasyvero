import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import HomeProductCards from "../HomeProductCards";
import { AiOutlineHome } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="z-10 relative">
        <Navbar />
      </div>
      <div className="text-center my-10 lg:mb-20">
        <h1 className="text-2xl font-bold text-white inline-block bg-white bg-opacity-20 rounded-full shadow-md py-3 px-4">
          <AiOutlineHome size={38} />
        </h1>
      </div>
      <div className="text-center text-xl mb-20 pb-4 shadow-lg ">
        <h1>Découvrez nos différentes gammes</h1>
      </div>
      <HomeProductCards />
      <div className="block lg:grid lg:grid-cols-2 lg:px-10 lg:py-20 ml-2 md:ml-40 shadow-xl rounded-tl-3xl rounded-bl-3xl">
        <div className="flex flex-col justify-center text-left w-full px-5 py-5 lg:px-10">
          <h2 className="text-xl font-bold mb-3">La société Pasyvero</h2>
          <div className="border border-dashed border-gray-800 mb-3"></div>
          <FaQuoteLeft className="m-2 text-gray-800" />
          <p className="italic mt-1 ml-7">
            Nous sommes une entreprise belge spécialisée dans la production de
            produits désoxydants professionnels pour les véhicules et les
            bateaux.
            <br /> Nos produits sont utilisés dans de nombreux car-wash,
            carrosseries et autres établissements professionnels de l'entretien
            automobile.
            <br /> Nous proposons une gamme complète de produits désoxydants,
            conçus pour éliminer efficacement la rouille, l'oxydation et autres
            saletés de surface sur les carrosseries, les jantes et les pièces
            métalliques des véhicules.
            <br /> Nous avons une gamme de produits spécialement conçus pour une
            utilisation sur les bateaux.
            <br /> Nous travaillons en collaboration avec des professionnels de
            l'entretien pour développer des solutions de nettoyage de pointe
            adaptées à leurs besoins spécifiques.
            <br /> N'hésitez pas à nous contacter pour plus d'informations ou
            pour passer commande.
            <br /> Nous serons ravis de vous aider à trouver la solution de
            nettoyage parfaite pour vos besoins.
          </p>
          <div className="quotes-right">
            <FaQuoteRight className="mt-3 text-gray-800" />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full lg:pl-10">
          <div className="experienceTextBg shadow-2xl rounded-3xl text-center py-5 my-5 mx-10 px-5">
            <img
              src="laurel-badge.png"
              alt="badge-45years"
              className="h-[110px] w-[110px] mx-auto"
            ></img>
            <h2 className="text-xl font-bold mb-2">
              Une expérience de plus de 45 ans ...
            </h2>
            <div className="border border-gray-800 border-opacity-50 mb-3"></div>
            <p className="italic m-2">
              Un produit perfectionné au fil des années afin d'obtenir un
              résultat des plus efficaces.
              <br /> Grâce à son engagement envers la qualité et l'amélioration
              de sa formule, Pasyvero est reconnue comme une société de
              production fiable et de confiance pour les propriétaires de
              voitures, de motos, de bateaux et autres véhicules.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
