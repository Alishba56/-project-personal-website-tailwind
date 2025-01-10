import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";


import Image from 'next/image';
import map from '@/images/map.png'



const contact = () => {
  return (
    <div className='sm:h-[120vh] h-[290vh] w-screen   ' id='contact'>



<div className='w-[106%] h-[2px] bg-gray-400'></div>
        <div className='sm:ml-[25%]  sm:mt-[10%] mt-20 px-4'>
        <h1 className='text-5xl text-gray-600 font-bold'>CONTACT</h1>
        </div>
           <p className='text-1xl font-bold sm:ml-[35%] px-4  text-gray-400 pt-10  '>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    
    
    
    
  <div className='flex flex-wrap h-[100vh]  py-10 w-screen mx-4 sm:ml-[20%] gap-14'>
   

        <div className='sm:w-[30%] w-[95%] sm:pl-10 px-4    bg-gray-100 '>
            <h1 className='flex text-2xl font-bold text-gray-600 items-center mt-10 gap-4'> <IoLocationOutline className='text-4xl border border-gray-600 text-gray-600 rounded-full p-1 '/>Address</h1>
            <p className='text-1xl ml-8  text-gray-400'>A108 Adam Street, New York, NY 535022</p>


            <h1 className='flex text-2xl font-bold text-gray-600 items-center mt-10 gap-4'> <FaPhone  className=' text-4xl border border-gray-600 text-gray-600 rounded-full p-1 '/>Call us</h1>
            <p className='text-1xl ml-8  text-gray-400'>A108 Adam Street, New York, NY 535022</p>
            <h1 className='flex text-2xl font-bold text-gray-600 items-center mt-10 gap-4'> <CiMail className='text-4xl border border-gray-600 rounded-full text-gray-600  p-1 '/>Email us</h1>
            <p className='text-1xl ml-8  text-gray-400'>info@example.com</p>
          <div className='mt-24'>
          <Image
          src={map}
          alt='map-imgae'
          />
</div>
        </div >
        <div className='sm:w-[45%] w-[95%] bg-gray-100 '>
          <div className='flex flex-wrap'>
          <div className='sm:ml-10 mx-5 mt-9'>

            <h1 className='text-gray-600'>Your Name</h1>
            <input type="name" className=' w-[16rem] mt-4 h-[7vh] py-2 px-2' />
          </div>
          <div className='sm:ml-10  mx-5  mt-9'>
            <h1 className='text-gray-600'>User Name</h1>
            <input type="name" className=' w-[16rem] mt-4 h-[7vh] py-2 px-2' />
          </div>
          </div>
          <div className='sm:ml-10 mx-5 mt-9'>
            <h1 className='text-gray-600'>Your Email</h1>
            <input type="name" className='sm:w-[92%] w-[16rem] mt-4 h-[7vh] py-2 px-2' />
          </div>

          <div className='sm:ml-10 mx-5 mt-9'>
            <h1 className='text-gray-600'>message</h1>
            <textarea className='sm:w-[92%] w-[16rem]  mt-4 h-[30vh] py-2 px-2' 
            rows={6} />
          </div>
          <div className=' flex flex-wrap  mt-4 justify-center  '>
            <button className='bg-gray-800 rounded-full px-6 mb-10 sm:mb-0 py-3 hover:bg-gray-500 hover:text-black  text-white'>Send message</button>
          </div>
          
        </div>
       
        </div>
    </div>
  )
}

export default contact
