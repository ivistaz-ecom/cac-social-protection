import React from "react";
import { objectivesData } from "../../utils/data";

const Objectives = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute w-full h-full bg-[url('/images/our-object.jpeg')] bg-no-repeat bg-center bg-cover"></div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center md:justify-end h-full p-4 md:pr-10">
        <div className="w-full md:w-1/2 p-4 md:p-8 text-white ">
          <h2 className="text-custom-yellow text-3xl sm:text-4xl font-bold mb-4 md:mb-6">
            Our Objectives
          </h2>
          <p className="text-gray-200 text-sm sm:text-base mb-2 md:mb-4">
            Here is what we aim to achieve together.
          </p>

          <div className="space-y-4 md:space-y-6">
            {objectivesData.map((objective, index) => (
              <div key={index}>
                <h3 className="bg-custom-yellow text-black p-2 md:p-3 text-base sm:text-lg md:text-xl font-bold mb-1 md:mb-2">
                  {objective.title}
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm md:text-base mt-2">
                  {objective.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
