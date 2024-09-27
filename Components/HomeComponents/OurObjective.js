import React from "react";

const objectivesData = [
  {
    title: "Universal coverage",
    content:
      "To support the implementation of comprehensive social protection systems across India, ensuring every citizen is covered by at least one form of social security.",
  },
  {
    title: "Responsive systems",
    content:
      "Enhancing awareness & capacity building, and improving grievance redressal to develop adaptive processes, ensuring broad access and effective management. Establishing mechanisms to boost accountability and continuous improvement in these systems.",
  },
  {
    title: "Scaling innovations and dissemination of learnings & knowledge",
    content:
      "Promote social and IT innovations across states and sectors, using technology to efficiently deliver services at scale. Develop a comprehensive M&E framework to track progress, assess outcomes, and provide insights for informed decision-making and policy development.",
  },
  {
    title: "Sustained financing",
    content:
      "To develop and endorse sustainable, equitable, and innovative financing mechanisms that ensure long-term funding for comprehensive social protection systems.",
  },
];

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
