import React from "react";
import { SlArrowRight } from "react-icons/sl";

const AboutMe = () => {
  return (
    <div
      className="w-full overflow-hidden py-12 px-4 sm:px-6 lg:px-16"
      id="about"
    >
      <div className="w-full h-[2px] bg-gray-400 mb-10"></div>
      <div className="sm:ml-[25%] px-6 sm:mt-[5%] mt-20 h-full">
        <h1 className="text-4xl font-bold text-gray-700  mb-8">About Me</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-4">
          Front-End Developer
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          I&apos;m a passionate web developer with a strong focus on front-end
          technologies. Currently pursuing a Bachelor&apos;s degree in Arts,
          I&apos;m always eager to learn and grow while working on innovative
          projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <SlArrowRight className="text-orange-600" />
              <span className="font-semibold text-gray-600">Birthday:</span>
              <span className="text-gray-400">23-June-2003</span>
            </div>
            <div className="flex items-center gap-2">
              <SlArrowRight className="text-orange-600" />
              <span className="font-semibold text-gray-600">Website:</span>
              <span className="text-gray-400">www.example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <SlArrowRight className="text-orange-600" />
              <span className="font-semibold text-gray-600">Phone:</span>
              <span className="text-gray-400">+92 320 4053333</span>
            </div>
            <div className="flex items-center gap-2">
              <SlArrowRight className="text-orange-600" />
              <span className="font-semibold text-gray-600">City:</span>
              <span className="text-gray-400">Karachi, Pakistan</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <SlArrowRight className="text-orange-600" />
              <span className="font-semibold text-gray-600">Age:</span>
              <span className="text-gray-400">21</span>
            </div>
            <div className="flex items-center gap-2">
              <SlArrowRight className="text-orange-600" />
              <span className="font-semibold text-gray-600">Degree:</span>
              <span className="text-gray-400">ADA</span>
            </div>
            <div className="flex items-center gap-2">
              <SlArrowRight className="text-orange-600" />
              <span className="font-semibold text-gray-600">Email:</span>
              <span className="text-gray-400 break-all">
                alishbah.shahzad666@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <SlArrowRight className="text-orange-600" />
              <span className="font-semibold text-gray-600">Freelance:</span>
              <span className="text-gray-400">Available</span>
            </div>
          </div>
        </div>

        <p className="mt-8 text-gray-400 leading-relaxed">
          I am a passionate and driven front-end developer, eager to apply my
          skills and contribute to innovative web projects. I am proficient in
          HTML, CSS, JavaScript, React, and Next.js, and I am committed to
          creating user-friendly and visually appealing web experiences.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
