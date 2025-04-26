import React from "react";

const Education = () => {
  return (
    <div className="w-screen py-12" id="education">
      <div className="w-full h-[2px] bg-gray-400"></div>

      <div className="sm:ml-[25%] px-6 sm:mt-[5%] mt-20 h-full">
        <h1 className="text-4xl font-bold text-gray-700  mb-8">Education</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              Generative AI Course (GIAIC)
            </h2>
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-gray-500">
                Key Modules:
              </h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>TypeScript (Completed)</li>
                <li>Next.js (Completed)</li>
                <li>Python (Ongoing)</li>
                <li>Generative AI</li>
              </ul>
            </div>
            <p className="text-gray-400">In Progress</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              Bachelor&apos;s Degree in Arts
            </h2>
            <h3 className="text-lg font-semibold text-gray-500 mb-2">
              University of Karachi
            </h3>
            <p className="text-gray-400">In Progress (Undergraduate)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
