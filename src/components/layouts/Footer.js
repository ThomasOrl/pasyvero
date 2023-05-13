import React from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdPhoneIphone } from "react-icons/md";

function Footer() {
  return (
    <>
      <footer className="bg-black bg-opacity-20 mt-10">
        <div className="flex items-center justify-center px-4 py-2 lg:justify-between">
          <div className="mr-12 hidden lg:block text-xl font-bold">
            <span>Retrouvez nous sur les réseaux</span>
          </div>
          <div className="flex justify-center">
            <Link
              to=""
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase"
            >
              <GrFacebookOption className="mx-auto h-full w-4" />
            </Link>

            <Link
              to="#!"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase"
            >
              <FaGooglePlusG className="mx-auto h-full w-4" />
            </Link>

            <Link
              to="#!"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase"
            >
              <FaLinkedinIn className="mx-auto h-full w-4" />
            </Link>
          </div>
        </div>
        <div className="border border-white border-opacity-50 mb-2"></div>
        <div className="grid-1 grid gap-8 px-4 py-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center md:text-left">
            <h6 className="mb-4 flex items-center justify-center font-bold uppercase md:justify-start">
              À propos
            </h6>
            <p>Pasyvero | Des produits désoxydants d'origine belge.</p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <BsFillHouseFill className="mr-2" />
              La Hulpe , Belgique
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <GrMail className="mr-2" />
              pasyvero@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdPhoneIphone className="mr-2" />+ 32 475 51 63 37
            </p>
          </div>
        </div>
        <div className="border border-white border-opacity-50 mb-2"></div>
        <div className="flex flex-col text-center px-4 py-2 sm:flex-row sm:justify-between">
          <span className="flex flex-row justify-center items-center">
            © 2023 Copyright | Pasyvero
          </span>
          <Link to="https://github.com/ThomasOrl" type="button">
            <span className="flex flex-row justify-center items-center">
              <img src="images/OT-logo.png" alt="logo" className="h-11"></img>
              Design by ThomasOrlans
            </span>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
