import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Copyrights &copy; {currentYear} Catalyst Management Services Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
