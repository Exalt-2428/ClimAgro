import React from 'react'

const Success = () => {
    return (
      <div className="px-4 py-8 bg-gray-700 text-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-red-300 text-center text-2xl font-bold mb-4">
            Customer Success Story
          </h2>
          <div className="relative bg-white rounded shadow p-4">
            {/* Replace 'VIDEO_URL' with the actual YouTube video URL */}
            <a
              href="VIDEO_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-0 pb-[56.25%] bg-gray-300 rounded"
            >
              {/* Insert video thumbnail image here */}
              <img
                src="VIDEO_THUMBNAIL_URL"
                alt="Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover rounded"
              />
            </a>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-green-500 hover:bg-white text-white hover:text-green-500 px-4 py-2 rounded transition-all duration-300 ease-in-out">
              Request A Demo
            </button>
            <button className="bg-green-500 hover:bg-white text-white hover:text-green-500 px-4 py-2 rounded transition-all duration-300 ease-in-out">
              Case Studies
            </button>
          </div>
        </div>
      </div>
    );
  };
  

export default Success