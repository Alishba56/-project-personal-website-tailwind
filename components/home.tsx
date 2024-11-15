import React from 'react'
import Image from 'next/image'
import img from '@/images/logo.png'
import backgroud from '@/images/back.png'

const home = () => {
  return (
    <div className=' h-[100vh] w-[106%] '>
         
    <Image
      className='object-cover  h-[100vh] w-[100%]  '
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
        <h2></h2>
    </div>
    </div>
  )
}

export default home
