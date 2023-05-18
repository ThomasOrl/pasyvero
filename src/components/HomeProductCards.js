import React from "react";
import { Link } from "react-router-dom";

function HomeProductCards() {
  const handleClick = () => {
    // Positionner la page tout en haut lors du click les liens
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="flex flex-col text-center md:flex-row items-center justify-center gap-10 xl:gap-40 pb-24 px-2 md:pt-[60px] lg:px-20 animate-slide-from-left">
        <div className=" homeCard border border-white border-opacity-10 text-lg mt-8 px-5 py-2 rounded-3xl shadow-lg">
          <div className="imgBx border border-white border-opacity-10 rounded-3xl shadow-lg">
            <img src="images/yvero-desox.png" alt="yvero-boat" />
          </div>
          <p className="relative text-xl">Yvero Desox</p>
          <p className="bg-black border border-white border-opacity-70 hover:border-black hover:bg-white hover:bg-opacity-20 hover:text-black bg-opacity-20 rounded-xl inline-block px-3 mt-2">
            <Link onClick={handleClick} to="/produits">
              + d'informations
            </Link>
          </p>
        </div>
        <div className=" homeCard border border-white border-opacity-10 text-lg mt-8 px-5 py-2 rounded-3xl shadow-lg">
          <div className="imgBx border border-white border-opacity-10 rounded-3xl shadow-lg">
            <img src="images/yvero-boat.png" alt="yvero-desox" />
          </div>
          <p className="relative text-xl">Yvero Boat</p>
          <p className="bg-black border border-white border-opacity-70 hover:border-black hover:bg-white hover:bg-opacity-20 hover:text-black bg-opacity-20 rounded-xl inline-block px-3 mt-2">
            <Link onClick={handleClick} to="/produits">
              + d'informations
            </Link>
          </p>
        </div>
        <div className=" homeCard border border-white border-opacity-10 text-lg mt-8 px-5 py-2 rounded-3xl shadow-lg">
          <div className="imgBx border border-white border-opacity-10 rounded-3xl shadow-lg">
            <img src="images/yvero-boat-teak.png" alt="yvero-teak" />
          </div>
          <p className="relative text-xl">Yvero Boat Teak</p>
          <p className="bg-black border border-white border-opacity-70 hover:border-black hover:bg-white hover:bg-opacity-20 hover:text-black bg-opacity-20 rounded-xl inline-block px-3 mt-2">
            <Link onClick={handleClick} to="/produits">
              + d'informations
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default HomeProductCards;
