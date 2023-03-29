import React from "react";
import Navbar from "../layouts/Navbar";
import { AiOutlineHome } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

function Home() {
  return (
    <>
      <Navbar />
      <div class="text-center my-10">
        <h1 class="text-2xl font-bold text-white inline-block bg-white bg-opacity-20 rounded-full shadow-md py-3 px-10">
          <AiOutlineHome size={30} />
        </h1>
      </div>
      <div className="block md:grid md:grid-cols-2 md:px-20 md:py-5">
        <div className="flex flex-col justify-center text-left w-full px-5 py-5 md:px-10">
          <h2 className="text-xl font-bold mb-3">La société Pasyvero</h2>
          <div className="border border-dashed border-gray-800 mb-3"></div>
          <FaQuoteLeft className="m-2 text-gray-800" />
          <p className="italic mt-1 ml-8">
            Nous sommes une entreprise belge spécialisée dans la production de
            produits désoxydants professionnels pour les véhicules et les
            bateaux.
            <br /> Nos produits sont utilisés dans de nombreux car-wash,
            carrosseries et autres établissements professionnels de l'entretien
            automobile.
            <br /> Nous proposons une gamme complète de produits désoxydants,
            conçus pour éliminer efficacement la rouille, l'oxydation et autres
            saletés de surface sur les carrosseries, les moteurs et les pièces
            métalliques des véhicules.
            <br /> Nos produits sont également adaptés pour une utilisation sur
            les bateaux.
            <br /> Chez Pasyvero, nous sommes fiers de notre engagement envers
            la qualité et l'efficacité de nos produits.
            <br /> Nous travaillons en étroite collaboration avec des
            professionnels de l'entretien automobile pour développer des
            solutions de nettoyage de pointe adaptées à leurs besoins
            spécifiques.
            <br /> Nous sommes convaincus que nos produits désoxydants
            professionnels offrent une solution de nettoyage efficace et durable
            pour les propriétaires de voitures, de motos, de bateaux et autres
            véhicules.
            <br /> N'hésitez pas à nous contacter pour plus d'informations ou
            pour passer une commande. Nous serons ravis de vous aider à trouver
            la solution de nettoyage parfaite pour vos besoins.
          </p>
          <div className="text-right">
            <FaQuoteRight className="mt-3 text-gray-800" />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full mx-5 md:px-10">
          <div className="bg-white shadow-lg bg-opacity-10 text-center py-10 mx-10 px-5"> 
            <h2 className="text-xl font-bold mb-5">
              Une expertise de plus de 45 ans...
            </h2>
            <p className="italic m-2">
              Un produit perfectionné au fil des années afin d'obtenir un
              résultat des plus efficaces. Grâce à son engagement envers la
              qualité et l'amélioration de sa formule, Pasyvero est reconnue
              comme une société de production fiable et de confiance pour les
              propriétaires de voitures, de motos, de bateaux et autres
              véhicules.
            </p>
            <img
              src="badge-45years.png"
              alt="badge-45years"
              className="h-[150px] w-[150px] mx-auto mt-5"
            ></img>
          </div>
        </div>
      </div>
      <div className="grid text-center grid-cols-3 gap-5 py-5 px-5 md:py-20 md:px-20">
        <div className="bg-white bg-opacity-20 text-lg px-5 py-2 rounded-full shadow-md">
          <p>Produit 1</p>
        </div>
        <div className="bg-white bg-opacity-20 text-lg px-5 py-2 rounded-full shadow-md">
          <p>Produit 2</p>
        </div>
        <div className="bg-white bg-opacity-20 text-lg px-5 py-2 rounded-full shadow-md">
          <p>Produit 3</p>
        </div>
      </div>
    </>
  );
}

export default Home;
