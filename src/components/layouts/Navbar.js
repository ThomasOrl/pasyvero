import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { TbVaccineBottle } from "react-icons/tb";
import { BiMailSend } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex justify-between my-2">
        <div className="flex items-center">
          <img
            src="Pasyvero-logo.png"
            alt="logo"
            className="h-[70px] ml-2 mt-2"
          ></img>
          <div className="hidden sm:block">
            <h1 className="text-white text-3xl ml-3">
              <Link to="/">PASYVERO</Link>
            </h1>
          </div>
        </div>
        <div className="flex flex-row mt-6 mr-2 z-10 hover:cursor-default" onClick={handleNav}>
          <div className="text-xl mr-2">Menu</div>
          {nav ? <AiOutlineClose size={28} /> : <CgMenuGridR size={28} />}
        </div>
        <div
          className={
            nav
              ? "fixed top-0 w-full h-[auto] pb-5 sm:h-[25%] bg-gray-900 rounded-b-3xl ease-in-out duration-700"
              : "fixed top-[-100%]"
          }
        >
          <div className="flex flex-row mt-2 md:mt-5">
            <img
              src="Pasyvero-logo.png"
              alt="logo"
              className="h-[70px] ml-2"
            ></img>
            <div className="hidden sm:block">
              <h1 className="text-3xl text-white mt-3 ml-2">PASYVERO</h1>
            </div>
          </div>
          <ul className="flex flex-col justify-center text-center items-center text-lg cursor-pointer gap-2 pt-5 sm:flex-row sm:gap-20 sm:pt-20">
            <li className="flex flex-row text-white hover:text-blue-300">
              <AiOutlineHome className="mr-2 mt-1" />
              <Link to="/">Accueil</Link>
            </li>
            <li className="flex flex-row text-white hover:text-blue-300">
              <TbVaccineBottle className="mr-2 mt-1" />
              <Link to="/produits">Produits</Link>
            </li>
            <li className="flex flex-row text-white hover:text-blue-300">
              <BiMailSend className="mr-2 mt-1" />
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
