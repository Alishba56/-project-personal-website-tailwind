import React from "react";
import { BrainCircuit, LayoutDashboard } from "lucide-react";

const Interests = () => {
  return (
    <div className="w-screen py-12" id="interests">
      <div className="w-full h-[2px] bg-gray-400"></div>
      <div className="sm:ml-[25%] px-6 sm:mt-[5%] mt-20 h-full">
        <h1 className="text-4xl font-bold text-gray-700  mb-8">Interests</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4 flex items-center">
              <BrainCircuit className="mr-2 w-6 h-6" />
              Technical Interests
            </h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Exploring Generative AI Technologies</li>
              <li>Enhancing User Experiences through Design and Animation</li>
              <li>Open-source Contribution and Learning New Frameworks</li>
              <li>
                Latest Technology Advancements in Front-end Web Development
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4 flex items-center">
              <LayoutDashboard className="mr-2 w-6 h-6" />
              Project Interests
            </h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Virtual Assistant Applications</li>
              <li>E-Commerce Websites</li>
              <li>Blog Websites</li>
              <li>Interactive and Responsive Designs & Prototypes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
