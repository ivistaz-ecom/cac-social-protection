import React from "react";
import Image from "next/image";

const Stakeholders = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:w-[100vh] px-4 container mx-auto">
        <p className="text-4xl text-custom-blue text-center mb-4 font-semibold">
          Value For All Stakeholders
        </p>
        <p className="text-xl text-center mb-4">
        Here are some of the ways the Setu Coalition will add value to our partners
        </p>

        <div className="w-auto">
          <Image
            src="/images/stakeholders.svg"
            alt="Social Protection"
            width={600}
            height={400}
            priority={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:my-10">
        {/* Mobile view heading */}
        <h2 className="text-4xl md:hidden px-2 font-bold text-custom-blue mb-4 text-center">
          Launch of &apos;Setu&apos; Coalition
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-6 flex justify-end md:justify-end">
            <Image
              src="/images/launch-of-setu-bg-img.png"
              alt="Image 1"
              width={600}
              height={500}
              priority={true}
            />
          </div>

          <div className="md:col-span-6 relative">
            <Image
              src="/images/launch-of-setu-bg-img-2.png"
              alt="Background Image 2"
              width={450}
              height={350}
              priority={true}
              className="absolute inset-0"
            />
            <div className="flex items-center md:p-8 p-4 rounded-md h-full">
              <div className="md:p-6 rounded-md flex flex-col">
                {/* Desktop view heading */}
                <h2 className="hidden md:block text-4xl text-custom-blue font-semibold mb-4">
                  Launch of &apos;Setu&apos; Coalition
                </h2>

                <p>
                  On August 1st, we proudly launched the Social Protection
                  Coalition at the Catalysing Social Impact 2024 event in Delhi.
                  Joining forces with 117 organisations, we’re committed to
                  enhancing access to social protection for India’s most
                  vulnerable communities. The event was a vibrant showcase of
                  insightful discussions and inspiring stories from community
                  champions, all focused on our shared vision of universal
                  coverage. We invite more organisations to collaborate with us
                  in scaling and sustaining these essential efforts for a more
                  inclusive future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stakeholders;
