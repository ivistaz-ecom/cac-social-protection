import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component
import { articles } from "../../utils/data";

const MediaArticle = () => {
  return (
    <div className="py-10 bg-custom-blue flex flex-col justify-center items-center">
      <p className="text-4xl text-white text-center mb-4 font-semibold py-4">
        Media Article 
      </p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 justify-center  px-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative md:w-[500px] h-[250px]"> {/* Set a fixed width and height */}
              <Image
                src={article.articleImg}  // The image source
                alt={article.imageTitle}  // Alt text for accessibility
                layout="fill"  // Make the image fill the container
                objectFit="cover"  // Ensure the image covers the area appropriately
                className="w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-52">
              <h3 className="text-gray-900 font-bold text-xl">
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
