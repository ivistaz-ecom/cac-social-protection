import React from "react";
import Image from "next/image"; // Import the Next.js Image component

const GetInvolved = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/get-involved-bg.png"
          alt="Get Involved Background"
          layout="fill"
          objectFit="cover" // Ensures the image covers the entire container
          className="z-0"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-9xl font-bold absolute md:-top-5">
          Get Involved
        </h1>
        <div className="py-10 md:pt-28">
          <p className="py-4 max-w-2xl text-lg font-light text-white/70">
            Whether you&apos;re a social impact organisation, investor, or
            policymaker, your support is critical to building a resilient India.
          </p>
          <p className="py-4 max-w-2xl text-lg font-light text-white/70">
            <span className="font-bold text-white">
              Join the Social Protection Coalition
            </span>{" "}
            today to make a lasting impact on millions of lives. Let&apos;s work
            together to transform social security into a force for economic and
            social progress.
          </p>
          <p className="py-4 text-lg font-light text-white/70">
            To learn how you can be part of this national effort, contact us at:{" "}
            <a
              href="mailto:setu.connect@Catalysts.org"
              className="bg-custom-yellow md:p-2 p-1 text-black mx-2"
            >
              setu.connect@Catalysts.org
            </a>
          </p>

          {/* Contact Person */}
          <p className="pt-4 text-lg font-light text-white/70">
            Connect with Priyamvada Tiwari, Associate Director-Platforms & Policy
            at{" "}
            <a
              href="mailto:priyamvada@Catalysts.org"
              className="bg-custom-yellow md:p-2 p-1 text-black mx-2"
            >
              priyamvada@Catalysts.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
