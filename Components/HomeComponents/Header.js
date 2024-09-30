import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from Next.js

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-lg md:px-20 z-10 relative"> {/* Increased shadow for more visibility */}
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="https://communityactioncollab.org/">
        <Image 
          src="/images/cac-logo.svg" 
          alt="Logo"
          className="h-10" 
          width={150} 
          height={40} 
        /></Link>
      </div>

      {/* Join Now Button */}
      <div>
        <Link 
          href="https://registration.communityactioncollab.org/partner-sign-up/new" 
          target='_blank'
          className="bg-custom-yellow text-black font-semibold py-2 px-4 hover:bg-yellow-500 transition duration-200">
          Join Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
