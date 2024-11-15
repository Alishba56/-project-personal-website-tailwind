import About from '@/components/about'
import Contact from '@/components/contact'
import Education from '@/components/education'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Home from '@/components/home'
import Interests from '@/components/interests'
import Skills from '@/components/skills'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
     <Header/>
     <div>
     <Home/>
     <Skills/>
     <Education/>
     <Interests/>
     <About/>
      <Contact/>
       <Footer/>

     </div>
    </div>
  )
}

export default page
