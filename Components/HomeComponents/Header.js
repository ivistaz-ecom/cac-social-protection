import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from Next.js

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-lg md:px-20 z-10 relative"> {/* Increased shadow for more visibility */}
      {/* Logo Section */}
      <div className="flex items-center">
        <Image 
          src="/images/cac-logo.svg" // Replace with the actual path to your logo image
          alt="Logo"
          className="h-10" // Adjust height as needed
          width={150} // Specify the width based on your logo's dimensions
          height={40} // Specify the height based on your logo's dimensions
        />
      </div>

      {/* Join Now Button */}
      <div>
        <Link 
          href="#" 
          className="bg-custom-yellow text-black font-semibold py-2 px-4 hover:bg-yellow-500 transition duration-200">
          Join Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
