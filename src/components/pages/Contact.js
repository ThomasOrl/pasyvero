import React from "react";
import Navbar from "../layouts/Navbar";
import { BiMailSend } from "react-icons/bi";

function Contact() {
  return (
    <>
      <Navbar />
      <div class="text-center my-10">
        <h1 class="text-2xl font-bold text-white inline-block bg-white bg-opacity-20 rounded-full shadow-md py-3 px-4">
          <BiMailSend size={40} />
        </h1>
      </div>
    </>
  );
}

export default Contact;
