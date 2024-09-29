"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";


const WhatWeDo = () => {
  const images = [
    "/images/what-we-do-mobile-img-1.svg",
    "/images/what-we-do-mobile-img-2.svg",
    "/images/what-we-do-mobile-img-3.svg",
    "/images/what-we-do-mobile-img-4.svg",
    "/images/what-we-do-mobile-img-5.svg",
  ];

  return (
    <>
      {/* What We Do  */}

      <div className="hidden lg:flex flex-col items-center justify-center py-10 px-4">
        <p className="text-4xl text-custom-blue text-center mb-4 font-semibold">
          What We Do
        </p>
        <p className="text-xl text-center mb-4">
          Here is how we make it all come together
        </p>
        <Image
          src="/images/what-we-do.svg"
          alt="Social Protection"
          width={1300}
          height={400} // Provide appropriate height to maintain aspect ratio
          className="w-[100] h-auto"
          
        />
      </div>

      <div className="block md:hidden">
        {" "}
        {/* Hide carousel on medium and larger screens */}
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={false}
          autoPlay
          showArrows={false}
          interval={3000}
          transitionTime={1500}
          className="py-10 mx-10"
        >
          {images.map((image, index) => (
            <div key={index}>
              <Image width={100} height={100} className="px-2" src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default WhatWeDo;
