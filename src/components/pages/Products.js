import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
import { TbVaccineBottle } from "react-icons/tb";
import { BsBook } from "react-icons/bs";
import { GiSlicedSausage } from "react-icons/gi";
import Footer from "../layouts/Footer";

function Produits() {
  const [visibleUtilisationIndexes, setVisibleUtilisationIndexes] = useState(
    []
  );
  const [visibleInfosIndexes, setVisibleInfosIndexes] = useState([]);
  const [isButtonActive, setIsButtonActive] = useState(false);

  //Faire apparaitre le texte "utilisation" caché & bouton actif
  const utilisationTextClick = (index) => {
    setIsButtonActive(!isButtonActive);
    if (visibleUtilisationIndexes.includes(index)) {
      setVisibleUtilisationIndexes(
        visibleUtilisationIndexes.filter((i) => i !== index)
      );
    } else {
      setVisibleUtilisationIndexes([...visibleUtilisationIndexes, index]);
    }
  };
  //Faire apparaitre le texte "Infos" caché & bouton actif
  const infosTextClick = (index) => {
    setIsButtonActive(!isButtonActive);
    if (visibleInfosIndexes.includes(index)) {
      setVisibleInfosIndexes(visibleInfosIndexes.filter((i) => i !== index));
    } else {
      setVisibleInfosIndexes([...visibleInfosIndexes, index]);
    }
  };
  return (
    <>
      <div className="z-10 relative">
        <Navbar />
      </div>
      <div className="text-center my-10">
        <h1 className="text-2xl font-bold text-white inline-block bg-white bg-opacity-20 rounded-full shadow-md py-3 px-4">
          <TbVaccineBottle size={40} />
        </h1>
      </div>
      <div className="flex flex-col items-center pt-10 pb-20 gap-5 mx-5 lg:flex-row lg:gap-20 lg:items-baseline justify-center">
        <div
          className={`border border-white border-opacity-30 text-lg mt-8 px-5 py-4 rounded-3xl shadow-lg infosProductCard ${
            visibleUtilisationIndexes.includes(0) ||
            visibleInfosIndexes.includes(0)
              ? "expand"
              : ""
          }`}
        >
          <div className="imgProductCard">
            <img src="images/yvero-desox.png" alt="yvero-boat" />
          </div>
          <p className="relative font-semibold italic text-xl pt-5 text-center">
            Yvero Desox
          </p>
          <div
            className="flex flex-row justify-center items-center text-center mt-4"
            onClick={() => utilisationTextClick(0)}
          >
            <GiSlicedSausage size={20} />
            <p className="ml-2 italic ">
              <button
                className={`hover:border-b hover:border-t hover:border-dashed ${
                  visibleUtilisationIndexes.includes(0) ? "active" : ""
                }`}
              >
                Utilisation
              </button>
            </p>
          </div>
          <div
            className="flex flex-row justify-center items-center text-center mt-4"
            onClick={() => infosTextClick(0)}
          >
            <BsBook size={20} />

            <p className="ml-2 italic">
              <button
                className={`hover:border-b hover:border-t hover:border-dashed ${
                  visibleInfosIndexes.includes(0) ? "active" : ""
                }`}
              >
                Infos produit
              </button>
            </p>
          </div>
          <div
            className={`invisible ${
              visibleUtilisationIndexes.includes(0) ? "visible" : ""
            }`}
          >
            <p className="border-b border-dashed mt-4 mb-3"></p>
            <p className="text-sm">
              <span className="font-bold">Pour les jantes :</span> Appliquer
              YVERO DESOX<span> </span>
              <span className="font-bold border border-white">PUR</span> au
              pinceau, spray ou pulvérisateur en partant du bas de la jante
              jusqu'au haut. Attendre que le produit agisse pendant environ 10 à
              15 minutes. Rincer à l'eau froide à l'aide d'une éponge, d'un
              tuyau d'arrosage ou d'un nettoyeur haute pression. Notez qu'il est
              déconseillé d'utiliser le produit au grand soleil et que celui-ci
              est sans danger pour les caoutchoucs.
              <br />
              <br />
              <span className="font-bold">Pour la carrosserie :</span> Préparer
              la solution en mélangeant 1 litre d'YVERO DESOX avec 9 litres
              d'eau froide. Utiliser la solution comme un shampooing pour laver
              la voiture comme d'habitude. Attendre environ 15 minutes. Rincer à
              l'eau froide jusqu'à ce que la mousse ait disparu. Si toutes les
              traces d'oxydation ont disparu, compléter avec un polish rapide et
              sans effort. Si l'oxydation est importante, suivre la même
              procédure que pour les jantes.
            </p>
          </div>
          <div
            className={`invisible ${
              visibleInfosIndexes.includes(0) ? "visible" : ""
            }`}
          >
            <p className="border-b border-dashed mt-4 mb-3"></p>
            <p className="text-sm">
              <span className="font-bold">Infos produits</span> Appliquer YVERO
              DESOX<span> </span>
              <span className="font-bold border border-white">PUR</span> au
              pinceau, spray ou pulvérisateur en partant du bas de la jante
              jusqu'au haut. Attendre que le produit agisse pendant environ 10 à
              15 minutes. Rincer à l'eau froide à l'aide d'une éponge, d'un
              tuyau d'arrosage ou d'un nettoyeur haute pression. Notez qu'il est
              déconseillé d'utiliser le produit au grand soleil et que celui-ci
              est sans danger pour les caoutchoucs.
              <br />
            </p>
          </div>
        </div>
        <div
          className={`border border-white border-opacity-30 text-lg mt-8 px-5 py-4 rounded-3xl shadow-lg infosProductCard ${
            visibleUtilisationIndexes.includes(1) ? "expand" : ""
          }`}
        >
          <div className="imgProductCard ">
            <img src="images/yvero-boat.png" alt="yvero-boat" />
          </div>
          <p className="relative font-semibold italic text-xl pt-5 text-center">
            Yvero Boat
          </p>
          <div
            className="flex flex-row justify-center items-center text-center mt-4"
            onClick={() => utilisationTextClick(1)}
          >
            <GiSlicedSausage size={20} />
            <p className="ml-2 italic">
              <button
                className={`hover:border-b hover:border-t hover:border-dashed ${
                  visibleUtilisationIndexes.includes(1) ? "active" : ""
                }`}
              >
                Utilisation
              </button>
            </p>
          </div>
          <div className="flex flex-row justify-center items-center text-center mt-4">
            <BsBook size={20} />
            <p className="ml-2 italic">Infos produit</p>
          </div>
          <div
            className={`invisible ${
              visibleUtilisationIndexes.includes(1) ? "visible" : ""
            }`}
          >
            <p className="border-b border-dashed mt-4 mb-3"></p>
            <p className="text-sm">
              <span className="font-bold">Pour la coque :</span> Yvero Boat
              s'emploie pur, pulvérisez ou appliquez légèrement au pinceau en
              veillant à couvrir uniformément la surface en bois. Laissez agir
              pendant 10 à 15 minutes pour permettre au produit d'agir en
              profondeur. Ensuite, rincez abondamment à l'aide d'une éponge et
              d'eau froide jusqu'à ce que la mousse disparaisse complètement.
              Lors du nettoyage des éléments de pont, veillez à bien mouiller la
              coque au préalable afin de neutraliser le produit à cet endroit et
              éviter les traînées coulantes. Ce produit est sans danger pour les
              caoutchoucs et le gelcoat. Évitez de l'utiliser en plein soleil
              pour de meilleurs résultats.
            </p>
          </div>
        </div>
        <div
          className={`border border-white border-opacity-30 text-lg mt-8 px-5 py-4 rounded-3xl shadow-lg infosProductCard ${
            visibleUtilisationIndexes.includes(2) ? "expand" : ""
          }`}
        >
          <div className="imgProductCard ">
            <img src="images/yvero-boat-teak.png" alt="yvero-boat-teak" />
          </div>
          <p className="relative font-semibold italic text-xl pt-5 text-center">
            Yvero Boat Teak
          </p>
          <div
            className="flex flex-row justify-center items-center text-center mt-4"
            onClick={() => utilisationTextClick(2)}
          >
            <GiSlicedSausage size={20} />
            <p className="ml-2 italic">
              <button
                className={`hover:border-b hover:border-t hover:border-dashed ${
                  visibleUtilisationIndexes.includes(2) ? "active" : ""
                }`}
              >
                Utilisation
              </button>
            </p>
          </div>
          <div className="flex flex-row justify-center items-center text-center mt-4">
            <BsBook size={20} />
            <p className="ml-2 italic">Infos produit</p>
          </div>
          <div
            className={`invisible ${
              visibleUtilisationIndexes.includes(2) ? "visible" : ""
            }`}
          >
            <p className="border-b border-dashed mt-4 mb-3"></p>
            <p className="text-sm">
              <span className="font-bold">Pour les ponts de bateau :</span>
              L'application du produit est très simple, il suffit de l'appliquer
              sur les surfaces en bois, attendre quelques instant après
              utilisation, un simple rinçage à l'eau froide suffit pour éliminer
              la solution chargée, laissant les bois précieux avec une apparence
              revitalisée et durable.
              <br />
              <br />
              <span className="font-bold">Infos produit: </span>
              YVERO BOAT TEAK CLEANER est un produit innovant conçu pour
              nettoyer en profondeur le teak et les bois précieux sur les
              bateaux. Sa formule spéciale, obtenue à partir d'un mélange à
              haute température d'acides et de produits astringents, il permet
              de restaurer l'aspect neuf des surfaces en bois. Les acides
              pénètrent en profondeur pour éliminer les impuretés des pores du
              bois, tandis que les éléments astringents resserrent les pores
              pour une finition lisse et uniforme. De plus, ce produit respecte
              les caoutchoucs et les joints polymères, garantissant une
              utilisation sûre et sans dommage pour les autres composants du
              bateau.
              <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Produits;
