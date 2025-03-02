import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-inner fixed bottom-0 left-0 w-full">
      <div className="container mx-auto px-4 py-0.5 flex justify-center items-center">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} URLShortener. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
