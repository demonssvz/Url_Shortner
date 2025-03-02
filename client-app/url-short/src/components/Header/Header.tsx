import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-white">URLShortener</h1>
      </div>
    </header>
  );
};

export default Header;
