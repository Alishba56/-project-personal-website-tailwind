import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";
import { SiShadcnui } from "react-icons/si";
import { IoLogoNpm } from "react-icons/io";
import { FaCheck } from "react-icons/fa";








const skills = () => {
  return (
    <div className=' h-[120vh] w-screen  ' id='skills'>
      <div className='w-[106%]  h-[2px] bg-gray-400'></div>

      <div className=' sm:ml-[25%]  px-5 sm:mt-[10%] mt-20 h-full  '>
        <h1 className='flex text-5xl font-bold text-gray-600 text-center'>SKILLS</h1>
        <p className='mt-6 text-2xl font-bold text-gray-400'>Programming Languages & Tools</p>
      
      
      <div className=' flex flex-wrap mt-10 gap-5 ml-5  '>
       <IoLogoJavascript className='text-5xl text-gray-400  hover:text-orange-400 ' />
       <IoLogoHtml5 className='text-5xl text-gray-400  hover:text-orange-400  '/>
       <IoLogoCss3 className='text-5xl  text-gray-400  hover:text-orange-400'/>
       <IoLogoFigma className='text-5xl text-gray-400  hover:text-orange-400 '/>
       <SiShadcnui className='text-5xl text-gray-400  hover:text-orange-400 '/>
       <IoLogoNpm className='text-5xl  text-gray-400  hover:text-orange-400'/>
      </div>
<div>
    <h1 className='flex text-3xl font-bold text-gray-400 text-center mt-14'>Design Tools</h1>
    <p className='flex items-center gap-2 mt-6 text-1xl font-bold text-gray-400'>< FaCheck/> UI/UX Design & Tools</p>
    <p className='flex items-center gap-2  mt-2 text-1xl font-bold text-gray-400'> < FaCheck/> Mobile-First, Responsive Design</p>
    <p className='flex items-center gap-2 mt-2 text-1xl font-bold text-gray-400'> < FaCheck/> Cross Browser Testing & Debugging</p>
    <p className='flex items-center gap-2 mt-2 text-1xl font-bold text-gray-400'>< FaCheck/> Cross Functional Teams</p>
    <p className=' flex items-center gap-2 mt-2 text-1xl font-bold text-gray-400'>< FaCheck/> Agile Development & Scrum  </p>

</div>
      </div>
    </div>
  )
}

export default skills
