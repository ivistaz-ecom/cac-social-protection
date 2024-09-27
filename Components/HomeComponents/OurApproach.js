import React from "react";

const OurApproach = () => {
  return (
    <>
      <div className="relative">
        {/* Dotted image positioned behind the entire container */}
        <div className="absolute inset-0 z-0 flex justify-center items-center mx-auto">
          <img
            src="images/dotted-line.svg"
            className="w-[500px] md:w-[1100px] h-full"
            alt="Background Dotted Line"
          />
        </div>

        {/* Content with relative positioning to appear above the background */}
        <div className="relative container mx-auto px-4 md:py-8 mb-10 z-10">
          <h2 className="text-4xl text-custom-blue font-semibold text-center mb-8">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="/images/connect.png"
                alt="Connect"
                className="w-16 h-16 mb-2"
              />
              <h3 className="text-lg font-bold">Connect</h3>
              <p className="text-center px-4">
                Foster collaborations between diverse stakeholders
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/art.png" alt="Act" className="w-16 h-16 mb-2" />
              <h3 className="text-lg font-bold">Act</h3>
              <p className="text-center px-4">
                Scale and support member programme and coalition initiatives
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/solve.png"
                alt="Solve"
                className="w-16 h-16 mb-2"
              />
              <h3 className="text-lg font-bold">Solve</h3>
              <p className="text-center px-4">
                Consolidate and disseminate successful innovations
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/learn.png"
                alt="Learn"
                className="w-16 h-16 mb-2"
              />
              <h3 className="text-lg font-bold">Learn</h3>
              <p className="text-center px-4">
                Facilitate <br /> knowledge sharing
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurApproach;
