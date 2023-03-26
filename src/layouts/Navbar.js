import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex justify-between items-center py-2">
        <div className="flex items-center">
          <img src="Pasyvero-logo.png" alt="logo" className="h-[110px]"></img>
          <div className="hidden sm:block">
            <h1 className="text-white text-3xl">
              <Link to="/">PASYVERO</Link>
            </h1>
          </div>
        </div>
        <div
          onClick={handleNav}
          className=" text-white flex flex-row z-10 pr-1"
        >
          <div className="text-xl mr-2">Menu</div>
          {nav ? <AiOutlineClose size={28} /> : <RiMenu3Fill size={28} />}
        </div>
        <div
          className={
            nav
              ? "fixed top-0 w-[100%] h-[28%] bg-black rounded-b-3xl ease-in-out duration-700"
              : "fixed top-[-100%]"
          }
        >
          <div className="flex flex-row py-3">
            <img src="Pasyvero-logo.png" alt="logo" className="h-[100px]"></img>
            <div className="hidden sm:block">
              <h1 className="text-3xl text-white pt-8">PASYVERO</h1>
            </div>
          </div>

          <ul className="flex flex-row text-lg justify-center cursor-pointer gap-6 p-4">
            <li className="text-white p-4 hover:text-blue-300">
              <Link to="/">Accueil</Link>
            </li>
            <li className="text-white p-4 hover:text-blue-300">
              <Link to="/produits">Produits</Link>
            </li>
            <li className="text-white p-4 hover:text-blue-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
