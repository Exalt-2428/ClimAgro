import React from 'react'

const Header = () => {
    return (
      <header className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img
              src="https://www.cropin.com/hs-fs/hubfs/cropin_2021/cropin-logo.png?width=400&height=170&name=cropin-logo.png"
              alt="Cropin Logo"
              className="h-12 w-auto"
            />
          </a>
          <div className="flex space-x-6">
            <div className="relative group inline-block">
              <button className="text-white flex items-center h-full">
                <span className="flex items-center justify-center">
                  Cropin Cloud
                </span>
                {/* <Icon icon={arrowDown} className="ml-1 text-white" /> */}
              </button>
              <ul className="hidden absolute mt-2 bg-gray-800 group-hover:block left-0 border border-red-700">
                <li>
                  <a href="#" className="block px-4 py-2 text-white">
                    Item 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-white">
                    Item 2
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="relative group inline-block">
              <button className="text-white flex items-center h-full">
                <span className="flex items-center justify-center">
                  Industries
                </span>
                {/* <Icon icon={arrowDown} className="ml-1 text-white" /> */}
              </button>
              <ul className="hidden absolute mt-2 bg-gray-800 group-hover:block left-0 border border-red-700">
                <li>
                  <a href="#" className="block px-4 py-2 text-white">
                    Item 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-white">
                    Item 2
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="relative group inline-block">
              <button className="text-white flex items-center h-full">
                <span className="flex items-center justify-center">
                  Resources
                </span>
                {/* <Icon icon={arrowDown} className="ml-1 text-white" /> */}
              </button>
              <ul className="hidden absolute mt-2 bg-gray-800 group-hover:block left-0 border border-red-700">
                <li>
                  <a href="#" className="block px-4 py-2 text-white">
                    Item 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-white">
                    Item 2
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="relative group inline-block">
              <a href="#" className="text-white flex items-center h-full">
                Newsroom
              </a>
            </div>
  
            <div className="relative group inline-block">
              <button className="text-white flex items-center h-full">
                <span className="flex items-center justify-center">Company</span>
                {/* <Icon icon={arrowDown} className="ml-1 text-white" /> */}
              </button>
              <ul className="hidden absolute mt-2 bg-gray-800 group-hover:block left-0 border border-red-700">
                <li>
                  <a href="#" className="block px-4 py-2 text-white">
                    Item 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-white">
                    Item 2
                  </a>
                </li>
              </ul>
            </div>
  
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Request A Demo
            </button>
          </div>
        </div>
      </header>
    );
  };

export default Header
