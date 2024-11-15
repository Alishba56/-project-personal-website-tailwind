"use client"

import Image from 'next/image'
import logo from "@/images/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { IoMdMenu } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import React, { useState } from 'react'




const Header = () => {
  const [attr, setAttr] = useState('hidden'); 
  const [attr2, setAttr2] = useState('block');
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setAttr(isOpen ? 'hidden' : 'flex');
    setAttr2(isOpen ? 'block' : 'hidden');
    setIsOpen(!isOpen);
  }
  return (
    <div className=''>
      
    <div className='fixed bg-[#b14423] w-[20%] h-screen justify-center items-center hidden  md:block md:fixed md:h-screen  '>
       <div className='justify-center p-14  items-center '>
        <Image className='rounded-full  '
        src={logo}
        alt="Logo"
        width={200}
        height={200}
        />
        <div className='flex justify-center  items-center text-3xl gap-5 mt-10  '>
        < FaFacebook className='hover:text-gray-400'/>
        <FaTwitter className='hover:text-gray-400'/>
        <FaLinkedin className='hover:text-gray-400'/>
        < FaGithub className='hover:text-gray-400' />
        <FaInstagram className='hover:text-gray-400'/>
      </div>
      
        <ul  className='text-2xl ml-14 ' >
          <li className='hover:underline   mt-8'>
            <a href='/'>Home</a>
          </li>
          <li  className='hover:underline  mt-8'>
            <Link href='#skills'>Skills</Link>
          </li>
          <li  className='hover:underline  mt-8'>
            <Link href='#education'>Education</Link>
          </li>
          <li  className='hover:underline  mt-8'>
            <Link href='#interests'>Interests</Link>
          </li>
          <li  className='hover:underline  mt-8'>
            <Link href='#about'>About</Link>
          </li>
          <li  className='hover:underline  mt-8'>
            <Link href='#contact'>Contact</Link>
          </li>
      
        </ul>
       
</div>
       
</div> 
<div className='block md:hidden absolute z-30 '>
            <IoMdMenu onClick={openMenu} className={`${attr2} text-5xl ml-10 mt-10 text-black cursor-pointer `}/>
            <RxCross2 onClick={openMenu} className={`${attr} text-5xl mt-5 cursor-pointer`}/>
         </div>
<div className={`list-none ${attr} md:hidden items-center mt-[19rem] text-xl gap-1 py-2`}>
<div className='fixed bg-[#b14423] md:w-[60%] w-[75%]   mt-6 h-screen justify-center items-center block md:hidden'>
       <div className='justify-center p-14  items-center '>
        <Image className='rounded-full  '
        src={logo}
        alt="Logo"
        width={200}
        height={200}
        />
        <div className='flex justify-center  items-center text-3xl gap-5 mt-10  '>
        < FaFacebook className='hover:text-gray-400'/>
        <FaTwitter className='hover:text-gray-400'/>
        <FaLinkedin className='hover:text-gray-400'/>
        < FaGithub className='hover:text-gray-400' />
        <FaInstagram className='hover:text-gray-400'/>
      </div>
      
        <ul  className='text-2xl ml-8  ' >
          <li className='hover:underline   mt-8'>
            <a href='/'>Home</a>
          </li>
          <li  className='hover:underline  mt-8'>
            <Link href='#skills'>Skills</Link>
          </li>
          <li  className='hover:underline  mt-8'>
            <Link href='#education'>Education</Link>
          </li>
          <li  className='hover:underline  mt-8'>
            <Link href='#interests'>Interests</Link>
          </li>
          <li  className='hover:underline  mt-8'>
            <Link href='#about'>About</Link>
          </li>
          <li  className='hover:underline  mt-8'>
            <Link href='#contact'>Contact</Link>
          </li>
      
        </ul>
</div>
</div>
      
    </div>
    </div>
  )
}

export default Header
