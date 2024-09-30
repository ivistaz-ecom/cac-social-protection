import React from "react";
import Image from "next/image";

const OurApproach = () => {
  return (
    <>
      <div className="relative">
        {/* Dotted image */}
        <div className="md:flex hidden absolute inset-0 z-0 justify-center items-center mx-auto">
          <Image
            src="/images/dotted-line.svg"
            alt="Background Dotted Line"
            className="w-[500px] md:w-[1000px] lg:w-[1000px] h-full"
            layout="intrinsic"
            width={1100}  
            height={500} 
          />
        </div>

        <div className="relative container mx-auto px-4 md:py-8 mb-10 z-10">
          <h2 className="text-4xl text-custom-blue font-semibold text-center mb-8">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/images/connect-1.svg"
                alt="Connect"
                className="w-20 h-20 mb-2"
                layout="intrinsic"
                width={64} 
                height={64} 
              />
              <h3 className="text-lg font-bold">Connect</h3>
              <p className="text-center px-4">
                Foster collaborations between diverse stakeholders
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/art-1.svg"
                alt="Act"
                className="w-20 h-20 mb-2"
                layout="intrinsic"
                width={64}     
                height={64}  
              />
              <h3 className="text-lg font-bold">Act</h3>
              <p className="text-center px-4">
                Scale and support member programme and coalition initiatives
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/solve-1.svg"
                alt="Solve"
                className="w-20 h-20 mb-2"
                layout="intrinsic"
                width={64}     
                height={64}  
              />
              <h3 className="text-lg font-bold">Solve</h3>
              <p className="text-center px-4">
                Consolidate and disseminate successful innovations
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/learn-1.svg"
                alt="Learn"
                className="w-20 h-20 mb-2"
                layout="intrinsic"
                width={64}     
                height={64}  
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
