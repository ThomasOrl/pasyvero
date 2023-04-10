import React from "react";
import Navbar from "../layouts/Navbar";
import { TbVaccineBottle } from "react-icons/tb";
import { BsBook } from "react-icons/bs";

function Produits() {
  return (
    <>
      <Navbar />
      <div class="text-center my-10">
        <h1 class="text-2xl font-bold text-white inline-block bg-white bg-opacity-20 rounded-full shadow-md py-3 px-4">
          <TbVaccineBottle size={40} />
        </h1>
      </div>
      <div className="flex flex-col items-center pb-10 gap-5 mx-5 lg:flex-row lg:gap-20 lg:pt-10 lg:items-baseline justify-center">
        <div className=" infosProductCard border border-white border-opacity-30 text-lg mt-8 px-5 py-2 rounded-3xl shadow-lg">
          <div className="imgProductCard ">
            <img src="images/yvero-boat.png" alt="yvero-boat" />
          </div>
          <p className="relative text-2xl pt-5 text-center">Yvero Desox</p>
          <div className="flex flex-row justify-center items-center text-center mt-4">
            <BsBook size={20} />
            <p className="ml-2 italic">Utilisation</p>
          </div>
          <div className="invisible">
            <p className="border-b border-dashed mt-4 mb-3"></p>
            <p>
              <span className="font-bold">Pour la carrosserie :</span> Préparer
              la solution en mélangeant 1 litre d'YVERO DESOX avec 9 litres
              d'eau froide. Utiliser la solution comme un shampooing pour laver
              la voiture comme d'habitude. Attendre environ 20 minutes. Rincer
              copieusement à l'eau froide jusqu'à ce que la mousse ait disparu.
              Si toutes les traces d'oxydation ont disparu, compléter avec un
              polish rapide et sans effort. Si l'oxydation est importante,
              suivre la même procédure que pour les jantes.
              <br />
              <span className="font-bold">Pour les jantes :</span> Appliquer
              YVERO DESOX pur au pinceau, spray ou pulvérisateur en partant du
              bas de la jante jusqu'au haut. Attendre que le produit agisse
              pendant environ 15 à 20 minutes. Rincer copieusement à l'eau
              froide à l'aide d'une éponge, d'un tuyau d'arrosage ou d'un
              nettoyeur haute pression. Rincer à l'eau claire après usage. Notez
              qu'il est déconseillé d'utiliser le produit au grand soleil et que
              celui-ci est sans danger pour les caoutchoucs.
            </p>
          </div>
        </div>
        <div className=" infosProductCard border border-white border-opacity-30 text-lg mt-8 px-5 py-2 rounded-3xl shadow-lg">
          <div className="imgProductCard ">
            <img src="images/yvero-boat.png" alt="yvero-boat" />
          </div>
          <p className="relative text-2xl pt-5 text-center">Yvero Boat</p>
          <div className="flex flex-row justify-center items-center text-center mt-4">
            <BsBook size={20} />
            <p className="ml-2 italic">Utilisation</p>
          </div>
          <div className="invisible">
            <p className="border-b border-dashed mt-4 mb-3"></p>
            <p>
              Pour la carrosserie : Préparer la solution en mélangeant 1 litre
              d'YVERO DESOX avec 9 litres d'eau froide. Utiliser la solution
              comme un shampooing pour laver la voiture comme d'habitude.
              Attendre environ 20 minutes. Rincer copieusement à l'eau froide
              jusqu'à ce que la mousse ait disparu. Si toutes les traces
              d'oxydation ont disparu, compléter avec un polish rapide et sans
              effort. Si l'oxydation est importante, suivre la même procédure
              que pour les jantes. Pour les jantes : Appliquer YVERO DESOX pur
              au pinceau, spray ou pulvérisateur en partant du bas de la jante
              jusqu'au haut. Attendre que le produit agisse pendant environ 15 à
              20 minutes. Rincer copieusement à l'eau froide à l'aide d'une
              éponge, d'un tuyau d'arrosage ou d'un nettoyeur haute pression.
              Rincer à l'eau claire après usage. Notez qu'il est déconseillé
              d'utiliser le produit au grand soleil et que celui-ci est sans
              danger pour les caoutchoucs.
            </p>
          </div>
        </div>
        <div className=" infosProductCard border border-white border-opacity-30 text-lg mt-8 px-5 py-2 rounded-3xl shadow-lg">
          <div className="imgProductCard ">
            <img src="images/yvero-boat-teak.png" alt="yvero-boat-teak" />
          </div>
          <p className="relative text-2xl pt-5 text-center">Yvero Boat Teak</p>
          <div className="flex flex-row justify-center items-center text-center mt-4">
            <BsBook size={20} />
            <p className="ml-2 italic">Utilisation</p>
          </div>
          <div className="invisible">
            <p className="border-b border-dashed mt-4 mb-3"></p>
            <p>
              Pour la carrosserie : Préparer la solution en mélangeant 1 litre
              d'YVERO DESOX avec 9 litres d'eau froide. Utiliser la solution
              comme un shampooing pour laver la voiture comme d'habitude.
              Attendre environ 20 minutes. Rincer copieusement à l'eau froide
              jusqu'à ce que la mousse ait disparu. Si toutes les traces
              d'oxydation ont disparu, compléter avec un polish rapide et sans
              effort. Si l'oxydation est importante, suivre la même procédure
              que pour les jantes. Pour les jantes : Appliquer YVERO DESOX pur
              au pinceau, spray ou pulvérisateur en partant du bas de la jante
              jusqu'au haut. Attendre que le produit agisse pendant environ 15 à
              20 minutes. Rincer copieusement à l'eau froide à l'aide d'une
              éponge, d'un tuyau d'arrosage ou d'un nettoyeur haute pression.
              Rincer à l'eau claire après usage. Notez qu'il est déconseillé
              d'utiliser le produit au grand soleil et que celui-ci est sans
              danger pour les caoutchoucs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Produits;
