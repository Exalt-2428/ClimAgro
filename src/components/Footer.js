import React from 'react'
import Image from 'next/image';
const Footer = () => {
    return (
      <footer className="bg-blue-900 px-4 py-8 text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="mb-4 md:mb-0">
            <Image width={2560} height={1056}
              src="https://www.cropin.com/hs-fs/hubfs/cropin_2021/cropin-logo.png?width=200&height=85&name=cropin-logo.png"
              alt="Cropin Logo"
              className="w-auto h-auto"
            />
            <div className="flex space-x-8 mt-4">
              <a href="#" className="hover:text-green-500 text-xs">
                F
              </a>
              <a href="#" className="hover:text-green-500 text-xs">
                T
              </a>
              <a href="#" className="hover:text-green-500 text-xs">
                I
              </a>
              <a href="#" className="hover:text-green-500 text-xs">
                L
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-sm">Solution</p>
            <a href="#" className="hover:text-green-500 text-xs">
              Cropin Cloud
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Cropin Apps
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Cropin Grow
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Cropin Connect
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Cropin Trace
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Cropin Data Hub
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Cropin Intelligence
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-sm">Company</p>
            <a href="#" className="hover:text-green-500 text-xs">
              About Us
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Dev. Agencies and Government Projects
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Partner with us
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Careers
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Events
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Contact
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Cropin and AWS
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-sm">Resources</p>
            <a href="#" className="hover:text-green-500 text-xs">
              Blogs
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              News
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Thought Leadership
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Webinars
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Case Studies
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Whitepapers
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-sm">Other Resources</p>
            <a href="#" className="hover:text-green-500 text-xs">
              Farming Apps
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              IoT in Agriculture
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Precision Agriculture
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Digital Farming
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Smart Farming
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Agriculture Technology
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              ICT in Modern Agriculture
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Crop Management Software
            </a>
            <a href="#" className="hover:text-green-500 text-xs">
              Farm Management Software
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-sm">The Agri-Tech Monthly</p>
            <input
              type="text"
              placeholder="First name"
              className="px-2 py-1 bg-gray-800 text-white rounded"
            />
            <input
              type="text"
              placeholder="Last name"
              className="px-2 py-1 bg-gray-800 text-white rounded"
            />
            <input
              type="email"
              placeholder="Business Email"
              className="px-2 py-1 bg-gray-800 text-white rounded"
            />
            <p className="text-sm">
              By clicking on the 'Subscribe' button you consent to receive periodic communications from Cropin.
            </p>
            <button className="bg-green-500 hover:bg-white text-white hover:text-green-500 px-4 py-2 rounded transition-all duration-300 ease-in-out">
              Subscribe to Newsletter
            </button>
          </div>
          
        </div>
        <hr className="border-white my-8" />
        <div className="max-w-screen-xl mx-auto flex justify-between">
          <div className="text-sm flex space-x-4">
            <a href="#" className="hover:text-green-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-500">
              Legal Terms
            </a>
            <a href="#" className="hover:text-green-500">
              Terms of Use
            </a>
          </div>
          <p className="text-sm">&copy; Copyright Cropin Technology Solutions Private Limited</p>
        </div>
      </footer>
    );
  };

export default Footer