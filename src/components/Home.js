import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

function Home() {
  return (
    <>
      <Navbar />
      <div class="text-center my-10">
        <h1 class="text-2xl font-bold text-white inline-block bg-white bg-opacity-20 rounded-full shadow-md py-3 px-4">
          <AiOutlineHome size={38} />
        </h1>
      </div>
      <div className="block lg:grid lg:grid-cols-2 lg:px-10 lg:py-5">
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
            <br /> N'hésitez pas à nous contacter pour plus d'informations ou
            pour passer une commande. Nous serons ravis de vous aider à trouver
            la solution de nettoyage parfaite pour vos besoins.
          </p>
          <div className="quotes-right">
            <FaQuoteRight className="mt-3 text-gray-800" />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full lg:pl-10">
          <div className="bg-white shadow-lg rounded-3xl bg-opacity-10 text-center py-5 mx-10 px-5">
            <img
              src="laurel-badge.png"
              alt="badge-45years"
              className="h-[140px] w-[140px] mx-auto"
            ></img>
            <h2 className="text-xl font-bold mb-2">
              Une expérience de plus de 45 ans ...
            </h2>
            <div className="border border-gray-800 border-opacity-40 mb-3"></div>
            <p className="italic m-2">
              Un produit perfectionné au fil des années afin d'obtenir un
              résultat des plus efficaces.
              <br /> Avec son engagement envers la qualité et l'amélioration de
              sa formule, Pasyvero est reconnue comme une société de production
              fiable et de confiance pour les propriétaires de voitures, de
              motos, de bateaux et autres véhicules.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center md:flex-row items-center justify-center gap-10 py-20 px-2 lg:gap-20 lg:pt-[110px] lg:px-20">
        <div className="relative w-[280px] h-[220px] bg-white bg-opacity-10 text-lg mt-8 px-8 py-2 rounded-3xl shadow-md">
          <div className="imgBx w-[130px] h-[130px] border border-white border-opacity-20 rounded-full relative shadow-lg">
            <img src="yvero-boat.png" alt="yvero-boat" />
          </div>
          <p className="relative text-xl">Yvero Boat</p>
          <p className="bg-black bg-opacity-30 rounded-xl inline-block px-2 mt-2">
            <Link to="/produits">Plus d'infos</Link>
          </p>
        </div>
        <div className="relative w-[280px] h-[220px] bg-white bg-opacity-10 text-lg mt-8 px-5 py-2 rounded-3xl shadow-md">
          <div className="imgBx w-[130px] h-[130px] border border-white border-opacity-20 rounded-3xl relative shadow-lg">
            <img src="yvero-boat-teak.png" alt="yvero-teak" />
          </div>
          <p className="relative text-xl">Yvero Desox</p>
          <p className="bg-black bg-opacity-30 rounded-xl inline-block px-2 mt-2">
            <Link to="/produits">Plus d'infos</Link>
          </p>
        </div>
        <div className="relative w-[280px] h-[220px] bg-white bg-opacity-10 text-lg mt-8 px-8 py-2 rounded-3xl shadow-md">
          <div className="imgBx w-[130px] h-[130px] border border-white border-opacity-20 rounded-full relative shadow-lg">
            <img src="yvero-boat-teak.png" alt="yvero-teak" />
          </div>
          <p className="relative text-xl">Yvero Boat Teak</p>
          <p className="bg-black bg-opacity-30 rounded-xl inline-block px-2 mt-2">
            <Link to="/produits">Plus d'infos</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
