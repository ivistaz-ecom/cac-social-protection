import React from "react";

const GetInvolved = () => {
  return (
    <div className="relative w-full h-full bg-[url(/images/get-involved-bg.png)] bg-no-repeat bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-9xl font-bold absolute md:-top-5">
          Get Involved
        </h1>
        <div className="py-10 md:pt-28">
        <p className="py-4 max-w-2xl text-sm md:text-lg font-light text-white/70">
          Whether you&apos;re a social impact organisation, investor, or
          policymaker, your support is critical to building a resilient India.
        </p>
        <p className="py-4 max-w-2xl text-sm md:text-lg font-light text-white/70">
          <span className="font-bold text-white">
            Join the Social Protection Coalition
          </span>{" "}
          today to make a lasting impact on millions of lives. Let&apos;s work
          together to transform social security into a force for economic and
          social progress.
        </p>
        <p className="py-4 text-sm md:text-lg font-light text-white/70">
          To learn how you can be part of this national effort, contact us at:{""}
          <span className="bg-custom-yellow md:p-2 p-1 text-black mx-2">
            setu.connect@Catalysts.org
          </span>
        </p>

        {/* Contact Person */}
        <p className="pt-4 text-sm md:text-lg font-light text-white/70">
          Connect with Priyamvada Tiwari, Associate Director-Platforms & Policy
          at{""}
          <span className="bg-custom-yellow md:p-2 p-1 text-black mx-2">
            priyamvada@Catalysts.org
          </span>
        </p>
      </div>
      </div>
    </div>
  );
};

export default GetInvolved;
