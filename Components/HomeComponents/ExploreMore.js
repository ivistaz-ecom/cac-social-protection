import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { videos } from '../../utils/data';

const ExploreMore = () => {
  return (
    <div className='py-10 flex flex-col justify-center items-center'>
      <p className="text-4xl text-custom-blue text-center mb-4 font-semibold py-4">
        Explore More 
      </p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 p-4">
        {videos.map((video, index) => (
          <div key={index} className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-64"> {/* Add a fixed height to the container */}
              <Image
                className="object-cover" // Ensures the image covers the div properly
                src={video.thumbnailUrl}
                alt="Video thumbnail"
                layout="fill" // This makes the image fill the parent container
                objectFit="cover" // Ensures proper scaling of the image
              />
              <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-black bg-opacity-50 rounded-full p-3">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 17l6-5-6-5v10z" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <div className="p-4">
              <h3 className="text-gray-900 font-bold text-xl">{video.videoTitle}</h3>
              <Link
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 block"
              >
                <span className='bg-custom-yellow text-black px-4 py-2 mt-4 rounded flex items-center justify-center w-36 mx-auto md:mx-0'>
                  Watch Now &rarr;
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
