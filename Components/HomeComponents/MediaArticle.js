import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component
import { articles } from "../../utils/data";

const MediaArticle = () => {
  return (
    <div className="py-10 bg-custom-blue flex flex-col justify-center items-center">
      <h3 className="text-4xl text-white text-center mb-4 font-semibold py-4">
        Media Article 
      </h3>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 justify-center  px-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative md:w-[500px] h-[250px]"> 
              <Image
                src={article.articleImg} 
                alt={article.imageTitle} 
                layout="fill"  
                objectFit="cover"  
                className="w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-52">
              <h3 className="text-gray-900 text-custom-blue font-bold text-xl">
                {article.imageTitle}
              </h3>
              <Link
                href={article.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 block"
              >
                <span className="bg-custom-yellow text-black px-4 py-2 mt-4 rounded flex items-center justify-center w-36 mx-auto md:mx-0">
                  Read More &rarr;
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaArticle;
