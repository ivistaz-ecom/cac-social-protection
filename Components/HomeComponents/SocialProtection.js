import React from "react";
import Image from 'next/image';

const SocialProtection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2 container mx-auto">
      <h2 className="text-xl md:text-4xl text-black text-center mb-4 md:max-w-5xl font-medium">
        Social protection plays a key role in reducing poverty,<br /> promoting
        inclusion, and boosting economic growth. In India, while progress has
        been made, challenges remain:
      </h2>
      <Image
        src="/images/social-protection.svg"
        alt="Social Protection"
        className="md:max-w-3xl w-full h-auto py-10"
        width={500}
        height={300} 
        layout="responsive" 
      />
    </div>
  );
};

export default SocialProtection;
