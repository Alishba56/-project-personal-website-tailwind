import React from 'react'
import Image from 'next/image'
import img from '@/images/logo.png'
import backgroud from '@/images/back.png'
import { useState, useEffect } from "react"
import Contact from './contact'
const Hero = () => {
  
  const [isContactOpen, setIsContactOpen] = useState(false)
  useEffect(() => {
    const storedContactState = localStorage.getItem("contactOpen")
    if (storedContactState) {
      setIsContactOpen(JSON.parse(storedContactState))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("contactOpen", JSON.stringify(isContactOpen))
  }, [isContactOpen])
  const toggleContact = () => {
    setIsContactOpen((prev) => !prev)
  } 

  return (
    <div className='  h-[100vh] w-[106%] '>
    <Image
      className='object-cover   h-[100vh] w-[100%]  '
      src={backgroud}
      alt="Logo"
      />
       <div className='absolute top-0 sm:left-[50%] left-[17%] flex flex-col  items-center   pt-40 '>
        <Image
        className='rounded-full  justify-center items-center  '
        src={img}
          alt='profile picture'
          width={200}
          height={200}
        />
        <h1 className='mt-10 sm:text-3xl text-2xl text-gray-600 font-bold pl-5'>Alishba Shahzad</h1>
        <div className="mt-4 flex gap-4"> 
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300">
            Hire Me
          </button>
  <Contact  isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
          <button 
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300"

        onClick={toggleContact}
      >
        Contact Me
      </button>
        </div>
    </div>
    </div>
  )
}

export default Hero
