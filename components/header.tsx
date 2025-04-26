"use client";

import Image from "next/image";
import logo from "@/images/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Interests", href: "#interests" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
  ];

  const navLinks = (
    <ul className="text-2xl space-y-6 mt-8">
      {navItems.map(({ name, href }) => (
        <li key={name} className="hover:underline">
          <Link href={href} onClick={closeMenu}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );

  const socialIcons = (
    <div className="flex justify-center items-center text-3xl gap-5 mt-10">
      <FaFacebook className="hover:text-gray-400" />
      <FaTwitter className="hover:text-gray-400" />
      <FaLinkedin className="hover:text-gray-400" />
      <FaGithub className="hover:text-gray-400" />
      <FaInstagram className="hover:text-gray-400" />
    </div>
  );

  return (
    <header>
      {/* Desktop Sidebar */}
      <div className="hidden md:fixed md:block bg-[#b14423] w-[20%] h-screen p-14">
        <Image
          className="rounded-full mx-auto"
          src={logo}
          alt="Logo"
          width={200}
          height={200}
        />
        {socialIcons}
        <div className="ml-14">{navLinks}</div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden fixed top-5 left-5 z-30">
        {isOpen ? (
          <RxCross2
            onClick={toggleMenu}
            className="text-5xl cursor-pointer text-black"
          />
        ) : (
          <IoMdMenu
            onClick={toggleMenu}
            className="text-5xl cursor-pointer text-black"
          />
        )}
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed  bg-[#b14423] w-full h-screen p-10 z-20 md:hidden overflow-y-auto">
          <Image
            className="rounded-full mx-auto"
            src={logo}
            alt="Logo"
            width={200}
            height={200}
          />
          {socialIcons}
          <div className="">{navLinks}</div>
        </div>
      )}
    </header>
  );
};

export default Header;
