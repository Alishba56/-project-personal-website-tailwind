"use client";

import React from "react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNpm,
} from "react-icons/io";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiFramer,
  SiSanity,
  SiGithub,
  SiVercel,
  SiSap,
} from "react-icons/si";
import { FaCheck } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

const Skills = () => {
  return (
    <div className="w-screen bg-white" id="skills">
      <div className="w-[106%] h-[2px] bg-gray-400"></div>

      <div className="sm:ml-[25%] px-6 sm:mt-[5%] mt-20 h-full">
        <h1 className="text-5xl font-bold text-gray-700 ">SKILLS</h1>

        <p className="mt-10 text-2xl font-bold text-gray-500">
          Languages & Frameworks
        </p>
        <div className="flex flex-wrap gap-6 mt-6 ml-5 text-5xl text-gray-400">
          <IoLogoHtml5 className="hover:text-orange-500" />
          <IoLogoCss3 className="hover:text-blue-500" />
          <IoLogoJavascript className="hover:text-yellow-400" />
          <SiTypescript className="hover:text-blue-600" />
          <SiNextdotjs className="hover:text-black" />
          <SiReact className="hover:text-sky-500" />
          <SiTailwindcss className="hover:text-cyan-500" />
        </div>

        <p className="mt-12 text-2xl font-bold text-gray-500">
          Libraries & Tools
        </p>
        <div className="flex flex-wrap gap-6 mt-6 ml-5 text-5xl text-gray-400">
          <SiFramer className="hover:text-pink-500" />
          <IoLogoFigma className="hover:text-pink-500" />
          <SiSap className="hover:text-green-500" />
          <SiSanity className="hover:text-red-400" />
          <SiVercel className="hover:text-black" />
          <SiGithub className="hover:text-gray-600" />
          <IoLogoNpm className="hover:text-red-500" />
        </div>

        <h2 className="text-3xl font-bold text-gray-500 text-center mt-14">
          Other Skills
        </h2>
        <div className="ml-5 mt-6 text-lg font-bold text-gray-500">
          <p className="flex items-center gap-2 mt-2">
            <FaCheck /> Responsive Web Design
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaCheck /> UI/UX Design & Tools
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaCheck /> Cross-Browser Testing & Debugging
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaCheck /> Version Control (Git)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
