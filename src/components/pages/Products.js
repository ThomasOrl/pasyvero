import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { TbVaccineBottle } from "react-icons/tb";
import { BsBook } from "react-icons/bs";
import { GiSlicedSausage } from "react-icons/gi";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { ImWarning } from "react-icons/im";
import { TiWarning } from "react-icons/ti";
import { AiOutlineSafety } from "react-icons/ai";
import { IoCarSportSharp } from "react-icons/io5";
import { GiCartwheel } from "react-icons/gi";
import { GiSailboat } from "react-icons/gi";

function Produits() {
  return (
    <>
      <div className="z-10 relative">
        <Navbar />
      </div>
      <div className="text-center mt-10 lg:my-10">
        <h1 className="text-2xl font-bold text-white inline-block bg-white bg-opacity-20 rounded-full shadow-md py-3 px-4">
          <TbVaccineBottle size={40} />
        </h1>
      </div>
      <div className="flex flex-col items-center pt-2 lg:pt-10 pb-10 gap-5 mx-5 lg:flex-row lg:items-baseline justify-center">
        {/* Card 1 */}
        <div
          className={`border border-white border-opacity-30 text-lg mt-8 px-3 py-4 rounded-3xl shadow-lg infosProductCard animate-slide-from-left`}
        >
          <div className="imgProductCard">
            <img src="images/yvero-desox.png" alt="yvero-boat" />
          </div>

          <p className="relative font-semibold italic text-xl pt-5 text-center">
            Yvero Desox
          </p>

          <div className="flex flex-row justify-center items-center text-center border border-white border-opacity-40 rounded-2xl py-1 mt-3">
            <GiSlicedSausage size={20} />
            <p className="ml-2 italic titleProductCardBlue">Utilisation</p>
          </div>

          <div>
            <div className="flex flex-row items-center justify-center my-5">
              <GiCartwheel size={24} />
              <h2 className="font-bold underline ml-2">Jantes</h2>
            </div>
            <div className="text-sm flex flex-col space-y-4">
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className="mr-2 icone-size" />
                <p>
                  Appliquer YVERO Desox
                  <span className="font-bold border border-white ml-1 px-1">
                    PUR
                  </span>
                </p>
              </div>
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className=" icone-size" />
                <p className="ml-2">Laisser agir 10 à 15 minutes</p>
              </div>
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className=" icone-size" />
                <p className="ml-2">Rincer à l'eau froide</p>
              </div>
              <div className="flex flex-row items-center">
                <AiOutlineSafety className=" icone-size" />
                <p className="ml-2">Sans danger pour les caoutchoucs</p>
              </div>
              <div className="flex flex-row items-center">
                <ImWarning className="icone-size" />
                <p className="ml-2">Eviter l'utilisation en plein soleil</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center my-5">
              <IoCarSportSharp size={24} />
              <h2 className="font-bold underline ml-2">Carrosseries</h2>
            </div>

            <div className="text-sm flex flex-col justify-left space-y-4">
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className="icone-size" />
                <p className="ml-2">Préparer 1L d'YVERO Desox avec 9L d'eau</p>
              </div>
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className="icone-size" />
                <p className="ml-2">Utiliser comme un shampooing</p>
              </div>
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className="icone-size" />
                <p className="ml-2">Laisser agir 10 à 15 minutes</p>
              </div>
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className="icone-size" />
                <p className="ml-2">Rincer abondamment à l'eau froide</p>
              </div>
              <div className="flex flex-row items-center">
                <AiOutlineSafety className="icone-size" />
                <p className="ml-2">Sans danger pour les caoutchoucs</p>
              </div>
              <div className="flex flex-row items-center">
                <ImWarning className="icone-size" />
                <p className="ml-2">Eviter l'utilisation en plein soleil</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-center items-center text-center border border-white border-opacity-40 rounded-2xl py-1 my-5">
              <BsBook size={20} />

              <p className="ml-2 italic titleProductCardBlue">Infos produit</p>
            </div>

            <p className="text-sm italic">
              Yvero Desox est un produit spécialement conçu pour désoxyder
              efficacement toutes sortes de surfaces. Sa formule puissante est
              parfaitement adaptée pour éliminer la formation de rouille
              superficielle sur les carrosseries, ainsi que les dépôts ou
              retombées de particules métalliques.
              <br /> Même les véhicules neufs peuvent bénéficier de ses
              incroyables propriétés ! <br />
              Polyvalent, Yvero Desox vous garantit des résultats exceptionnels.
              <br />
            </p>
            <p className="text-sm italic mt-3">
              <span className="font-semibold">
                Il est idéal pour une utilisation sur :
              </span>
              <br />
              <ul>
                <li>- Les carrosseries</li>
                <li>- Les jantes</li>
                <li>- Les enjoliveurs</li>
                <li>- Les motorhomes</li>
                <li>- Les chromes</li>
                <li>- Les polyester</li>
                <li>- Les alliages légers</li>
              </ul>
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`border border-white border-opacity-30 text-lg mt-8 px-5 py-4 rounded-3xl shadow-lg infosProductCard animate-slide-from-left `}
        >
          <div className="imgProductCard ">
            <img src="images/yvero-boat.png" alt="yvero-boat" />
          </div>
          <p className="relative font-semibold italic text-xl pt-5 text-center">
            Yvero Boat
          </p>

          <div className="flex flex-row justify-center items-center text-center border border-white border-opacity-40 rounded-2xl py-1 mt-3">
            <GiSlicedSausage size={20} />
            <p className="ml-2 italic titleProductCardBlue">Utilisation</p>
          </div>
          <div>
            <div className="flex flex-row items-center justify-center my-5">
              <GiSailboat size={24} />
              <h2 className="font-bold underline ml-2">Coques de bateaux</h2>
            </div>
            <div className="text-sm flex flex-col space-y-4">
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className="mr-2 icone-size" />
                <p>
                  Appliquer YVERO Boat
                  <span className="font-bold border border-white ml-1 px-1">
                    PUR
                  </span>
                </p>
              </div>
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className=" icone-size" />
                <p className="ml-2">Couvrir uniformément la surface choisie</p>
              </div>
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className=" icone-size" />
                <p className="ml-2">Laisser agir 10 à 15 minutes</p>
              </div>
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className=" icone-size" />
                <p className="ml-2">Rincer abondamment à l'eau froide</p>
              </div>
              <div className="flex flex-row items-center">
                <AiOutlineSafety className=" icone-size" />
                <p className="ml-2">
                  Sans danger pour les caoutchoucs et gelcoat
                </p>
              </div>
              <div className="flex flex-row items-center">
                <ImWarning className="icone-size" />
                <p className="ml-2">Eviter l'utilisation en plein soleil</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center justify-center my-5">
              <GiSailboat size={24} />
              <h2 className="font-bold underline ml-2">Ponts de bateaux</h2>
            </div>
            <div className="text-sm flex text-center flex-col space-y-4">
              <div className="flex justify-center">
                <TiWarning size={28} />
              </div>
              <p>
                Lors du nettoyage des éléments du pont, veillez à bien mouiller
                la coque au préalable afin de neutraliser le produit à cet
                endroit et ainsi éviter des éventuelles trainées coulantes.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-center items-center text-center border border-white border-opacity-40 rounded-2xl py-1 my-5">
              <BsBook size={20} />
              <p className="ml-2 italic titleProductCardBlue">Infos produit</p>
            </div>

            <p className="text-sm">
              Yvero Boat est un produit conçu spécialement pour les coques et
              ponts de bateaux. Ce produit est sans danger pour les caoutchoucs
              et le gelcoat. Évitez de l'utiliser en plein soleil pour de
              meilleurs résultats.
            </p>
            <p className="text-sm italic mt-3">
              <span className="font-semibold">
                Il est idéal pour une utilisation sur :
              </span>
              <br />
              <ul>
                <li>- Les coques de bateaux</li>
                <li>- Les ponts de bateaux</li>
              </ul>
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className={`border border-white border-opacity-30 text-lg mt-8 px-5 py-4 rounded-3xl shadow-lg infosProductCard animate-slide-from-left `}
        >
          <div className="imgProductCard ">
            <img src="images/yvero-boat-teak.png" alt="yvero-boat-teak" />
          </div>
          <p className="relative font-semibold italic text-xl pt-5 text-center">
            Yvero Boat Teak
          </p>

          <div className="flex flex-row justify-center items-center text-center border border-white border-opacity-40 rounded-2xl py-1 mt-3">
            <GiSlicedSausage size={20} />
            <p className="ml-2 italic titleProductCardBlue">Utilisation</p>
          </div>
          <div>
            <div className="flex flex-row items-center justify-center my-5">
              <GiSailboat size={24} />
              <h2 className="font-bold underline ml-2">Ponts de bateaux</h2>
            </div>
            <div className="text-sm flex flex-col space-y-4">
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className="mr-2 icone-size" />
                <p>
                  Appliquer YVERO Boat Teak
                  <span className="font-bold border border-white ml-1 px-1">
                    PUR
                  </span>
                </p>
              </div>
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className=" icone-size" />
                <p className="ml-2">Couvrir uniformément la surface choisie</p>
              </div>
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className=" icone-size" />
                <p className="ml-2">Laisser agir quelques instants</p>
              </div>
              <div className="flex flex-row items-center">
                <BsFillArrowRightSquareFill className=" icone-size" />
                <p className="ml-2">Rincer à l'eau froide</p>
              </div>
              <div className="flex flex-row items-center">
                <AiOutlineSafety className=" icone-size" />
                <p className="ml-2">
                  Sans danger pour les caoutchoucs et joints
                </p>
              </div>
              <div className="flex flex-row items-center">
                <ImWarning className="icone-size" />
                <p className="ml-2">Eviter l'utilisation en plein soleil</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-center items-center text-center border border-white border-opacity-40 rounded-2xl py-1 my-5">
              <BsBook size={20} />
              <p className="ml-2 italic titleProductCardBlue">Infos produit</p>
            </div>

            <p className="text-sm">
              Yvero Boat Teak est un produit conçu spécifiquement pour nettoyer
              en profondeur le teak et les bois précieux sur les bateaux. Sa
              formule spéciale obtenue à partir d'un mélange à haute température
              d'acides et de produits astringents, lui permet de restaurer
              l'aspect neuf des surfaces en bois.
              <br /> Les acides pénètrent en profondeur pour éliminer les
              impuretés des pores du bois, tandis que les éléments astringents
              resserrent les pores pour une finition lisse et uniforme. Ce
              produit respecte les caoutchoucs et les joints polymères,
              garantissant une utilisation sûre et sans dommage pour les autres
              composants du bateau.
            </p>
            <p className="text-sm italic mt-3">
              <span className="font-semibold">
                Il est idéal pour une utilisation sur :
              </span>
              <br />
              <ul>
                <li>- Les ponts de bateaux en teak </li>
                <li>- Les bois précieux </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Produits;
