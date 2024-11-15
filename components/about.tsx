import React from 'react'
 import Image from 'next/image'
 import img from '@/images/pic.png'
 import { SlArrowRight } from "react-icons/sl";


const about = () => {
  return (
    <div className='sm:h-[150vh] h-[280vh] w-screen  ' id='about'>
      <div className='w-[106%]  h-[2px] bg-gray-400'></div>
        <div className='sm:ml-[25%]  sm:mt-[10%] mt-20 px-2'>
        <h1 className='flex text-5xl font-bold text-gray-600 px-5 text-center'>ABOUT ME</h1>
        <p className='mt-10  text-gray-400 px-5'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>


      
      
        <div className=' flex flex-wrap sm:mt-32 mt-10 sm:ml-[15%] px-4 '>
         <Image
          className=' w-[80%] sm:w-[35%] sm:h-[25vw] object-cover h-[60vw]'
          src={img}
          alt="Logo"
                    />
     
     
     <div className='w-[60%] ml-10'>
        <h1 className='text-2xl font-bold sm:mt-0 mt-10  text-gray-600 '>UI/UX Designer & Web Developer.</h1>
        <p className='text-1xl mt-3  text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <div className='flex flex-wrap sm:gap-40 gap-5'>
        <div>
       
    <div className='flex mt-7 items-center gap-3'>
        <h1 className='text-1xl font-bold flex items-center gap-2  text-gray-600'> <SlArrowRight className='text-orange-600'/> Birthday:</h1>
        <p  className='text-1xl  text-gray-400'>23-june-2003</p>
        </div>
        <div className='flex mt-5 items-center gap-3'>
        <h1 className='text-1xl font-bold flex items-center gap-2  text-gray-600'> <SlArrowRight className='text-orange-600'/> Websites:</h1>
        <p  className='text-1xl  text-gray-400'>
        www.example.com</p>
        </div>

        <div className='flex mt-5 items-center gap-3'>
        <h1 className='text-1xl font-bold flex items-center gap-2  text-gray-600'><SlArrowRight className='text-orange-600'/> Phone:</h1>
        <p  className='text-1xl  text-gray-400'>+123 456 7890</p>
        </div>
        <div className='flex mt-5 items-center gap-3'>
        <h1 className='text-1xl font-bold flex items-center gap-2  text-gray-600'> <SlArrowRight className='text-orange-600'/> City:</h1>
        <p  className='text-1xl  text-gray-400'>Pakistan,karachi</p>
        </div>
        </div>
        
        <div>
        <div className='flex sm:mt-7  items-center gap-3'>
        <h1 className='text-1xl font-bold flex items-center gap-2  text-gray-600 '> <SlArrowRight className='text-orange-600'/> Age:</h1>
        <p  className='text-1xl  text-gray-400'>21</p>
        </div>
        <div className='flex mt-5 items-center gap-3'>
        <h1 className='text-1xl font-bold flex items-center gap-2  text-gray-600'> <SlArrowRight className='text-orange-600'/> Degree:</h1>
        <p  className='text-1xl  text-gray-400'>
        ADA</p>
        </div>

        <div className='flex mt-5 items-center gap-3'>
        <h1 className='text-1xl font-bold flex items-center gap-2  text-gray-600'> <SlArrowRight className='text-orange-600'/>Email:</h1>
        <p  className='text-1xl  text-gray-400'>email@example.com</p>
        </div>
        <div className='flex mt-5 items-center gap-3'>
        <h1 className='text-1xl font-bold flex items-center gap-2  text-gray-600'> <SlArrowRight className='text-orange-600'/> Freelance:</h1>
        <p  className='text-1xl  text-gray-400'>Available</p>
      
        </div>
        </div>
        </div>
        <p className='mt-10  text-gray-400'>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.</p>



        </div>
      

        </div>
    
        
    </div>
  )
}

export default about
// Key Skills of a Frontend Developer
// HTML (HyperText Markup Language): Structures content on web pages. HTML is essential for organizing web content like text, images, and videos into readable elements.
// CSS (Cascading Style Sheets): Styles the HTML content, defining layout, colors, fonts, and spacing to align with design standards and branding.
// JavaScript: Adds interactivity and dynamic behavior to websites, such as animations, dropdown menus, and real-time data updates for enhanced user experience.
// Frameworks and Libraries (React, Vue.js, Angular): These tools help developers build complex, scalable web applications more efficiently by providing reusable components and state management.
// Responsive and Adaptive Design: Ensures that websites look and function well on various screen sizes and devices, providing a consistent experience across desktops, tablets, and mobiles.
// Version Control (Git): Tracks code changes and enables collaboration with other developers, making it easier to manage code versions and project history.
// Cross-Browser Compatibility: Tests and ensures that web applications function correctly across various browsers, including Chrome, Firefox, Safari, and Edge.
// Accessibility (a11y): Develops websites that are usable for people with disabilities by following accessibility guidelines and best practices.











