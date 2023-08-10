import React from 'react';

const Navbar = () => {
  return (
    <nav className="mt-4 mb-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-black text-xl font-semibold flex items-center space-x-1">
          <span className="text-green-500">#</span>
          <span className="text-blue-500">Worlds</span>
          <span className="text-green-500">First</span>
          <span className="text-blue-500">Intelligent</span>
          <span className="text-green-500">Agriculture</span>
          <span className="text-blue-500">Cloud</span>
        </a>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none border border-green-500"
          />
        </div>
        <div className="relative">
          <p className="text-gray-700">CUSTOMER LOGIN:</p>
        </div>
        <div className="flex space-x-4">
          <a href="/smart-farm" className="text-gray-700 cursor-pointer">
            Cropin Grow (SmartFarm)
          </a>
          {/* <Icon icon="pepicons-pencil:line-y" className="text-gray-700" /> */}
          <a href="/smart-risk" className="text-gray-700 cursor-pointer">
            Cropin Intelligence (SmartRisk)
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
