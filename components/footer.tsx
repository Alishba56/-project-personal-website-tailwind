import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const footer = () => {
  return (
    <div className="w-screen bg-[#b14423] ">
      <div className="w-[100%] h-[2px] bg-gray-400"></div>
      <div className="sm:ml-[15%] ml-0  ">
        <div className="flex justify-center items-center text-3xl sm:gap-10 gap-5 mt-10  ">
          <FaFacebook className="hover:text-gray-400" />
          <FaTwitter className="hover:text-gray-400" />
          <FaLinkedin className="hover:text-gray-400" />
          <FaGithub className="hover:text-gray-400" />
          <FaInstagram className="hover:text-gray-400" />
        </div>
        <h1 className="text-1xl mt-5 font-bold text-center">
          Terms of Service & Privacy Policy © Copyright 2025. All Rights
          Reserved. Designed by Alishba Shahzad
        </h1>
      </div>
    </div>
  );
};

export default footer;
