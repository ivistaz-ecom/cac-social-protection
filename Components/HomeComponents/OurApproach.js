import React from "react";
import Image from "next/image";
import { approachData } from "../../utils/data";


const OurApproach = () => {
  return (
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
          {approachData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.src}
                alt={item.alt}
                className="w-20 h-20 mb-2 bg-white"
                layout="intrinsic"
                width={64}
                height={64}
              />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-center px-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
