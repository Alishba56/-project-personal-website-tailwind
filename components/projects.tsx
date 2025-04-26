import React from "react";
import { Laptop2, ShoppingCart, Code } from "lucide-react";
import resumeData from "../data"; // Import the data file
import { FaMicroblog } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="w-screen  py-12" id="projects">
      <div className="w-full h-[2px] bg-gray-400"></div>
      <div className="sm:ml-[25%] px-6 sm:mt-[5%] mt-20 h-full">
        <h1 className="text-4xl font-bold text-gray-700 mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col"
            >
              <h2 className="text-2xl font-semibold text-gray-600 mb-4 flex items-center">
                {project.title === "Virtual Assistant Application" && (
                  <Laptop2 className="mr-2 w-6 h-6" />
                )}
                {project.title === "E-Commerce Website" && (
                  <ShoppingCart className="mr-2 w-6 h-6" />
                )}
                {project.title === "Blog Website" && (
                  <FaMicroblog className="mr-2 w-6 h-6" />
                )}
                {project.title === "Other Projects" && (
                  <Code className="mr-2 w-6 h-6" />
                )}
                {project.title}
              </h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2 flex-grow">
                {project.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
