import React from "react";
import Link from "next/link";
import Image from "next/image";

const PartnerWithUs = () => {
  // Array of title and content pairs
  const contentItems = [
    {
      title: "Be Part of a National Coalition",
      text: "Join us to expand social protection by developing adaptive processes that enhance access to benefits for all eligible citizens, transforming lives and building a more resilient nation.",
    },
    {
      title: "Drive Innovation",
      text: "Help scale tech-powered solutions that make social protection faster, smarter, and more equitable for those who need it most.",
    },
    {
      title: "Policy and Practice Shaping Contributions",
      text: "Contribute in strengthening key policies and programmes at the central and state levels to accelerate access to social protection benefits for those who are eligible.",
    },
  ];

  return (
    <>
      <div className="relative h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto py-10 px-4 md:px-0 h-full">
          {/* Content Section */}
          <div className="flex flex-col justify-center container mx-auto w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl px-2 md:px-5 font-bold text-custom-blue mb-4 text-center md:text-left">
              Why Partner with Us
            </h2>

            {contentItems.map((item, index) => (
              <div key={index} className="md:px-6 p-2 rounded-md">
                <h3 className="text-lg md:text-xl font-semibold p-3 bg-custom-blue text-white inline-block">
                  {item.title}
                </h3>
                <p className="text-black mt-2 text-sm md:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center mt-6 md:mt-0">
            <img
              src="/images/why-partners-with-us-1.png" // Replace with your actual image path
              alt="Your description"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-5 text-center text-black">
        <p className="text-xl ">
          Together, we can create a stronger social safety net and make a real,
          lasting difference.
        </p>
        <Link
          href={""}
          className="bg-yellow-400 text-black px-4 py-2 mt-4 rounded flex items-center"
        >
          <span>Ready to join us?</span>
          <Image
            src={"/images/btn-arrow.png"}
            alt="arrow icon"
            className="ml-2"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </>
  );
};

export default PartnerWithUs;
