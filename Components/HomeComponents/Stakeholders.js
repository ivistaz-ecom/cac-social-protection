import React from "react";

const Stakeholders = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:w-[100vh] py-10 px-4 container mx-auto">
        <p className="text-4xl text-custom-blue text-center mb-4 font-semibold">
          Value For All Stakeholders
        </p>
        <p className="text-xl text-center mb-4">
          Here are some of the ways we add value to our partners
        </p>
        <img
          src="/images/stakeholders-2.svg"
          alt="Social Protection"
          className=""
          layout="Value For All Stakeholders"
        />
      </div>

      {/* Launch of 'Setu' Coalition */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 flex justify-end lg:justify-start">
            <img
              src="/images/launch-of-setu-bg-img.png"
              alt="Image 1"
              className="w-full h-auto lg:max-w-none"
            />
          </div>

          <div className="lg:col-span-6 bg-[url(/images/launch-of-setu-bg-img-2.png)] bg-contain bg-no-repeat bg-center h-[500px] w-full">
            <div className="flex items-center md:p-8 p-4 rounded-md h-full">
              <div className="md:p-6 rounded-md flex flex-col">
                <h2 className="text-3xl text-custom-blue font-semibold mb-4">
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
