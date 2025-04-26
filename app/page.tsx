"use client";

import About from "@/components/about";
import Hero from "@/components/home";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Interests from "@/components/interests";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="flex  overflow-hidden">
      <Header />
      <div>
        <Hero />
        <Skills />
        <Education />
        <Interests />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
