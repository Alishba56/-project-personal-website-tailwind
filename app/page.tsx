"use client"

import About from "@/components/about"
import Hero from "@/components/home"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Interests from "@/components/interests"
import Projects from "@/components/projects"
import Skills from "@/components/skills"


import { useState, useEffect } from "react"

 

export default function Home() {
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


  return (
    <div className="flex  overflow-hidden">
      <Header />
      <div >
      <Hero/> 
        <Skills />
        <Education />
        <Interests />
        <About />
        <Projects />
        <Footer />
      </div>
      <Contact  isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
         </div>
  )
}

