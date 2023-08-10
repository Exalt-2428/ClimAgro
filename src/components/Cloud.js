import React from 'react'
import Image from 'next/image';
const Cloud = () => {
    return (
      <div className="px-4 py-8 bg-gray-700 text-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-red-300 text-center text-2xl font-bold mb-4">
            Cropin Cloud - Introducing World’s First Intelligent Agriculture Cloud
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="md:w-1/2">
              <p className="text-xl font-semibold mb-2">Cropin Data Hub</p>
              <p className="text-gray-600 mb-4">
                Raw and processed ingest data pipelines of structured agri-data
                from the field via apps, IoT devices, mechanization data, weather,
                remote sensing data from satellites through a common object model.
              </p>
              <p className="text-xl font-semibold mt-2">Cropin Intelligence</p>
              <p className="text-gray-600">
                AI/ML models to process/extract critical intelligence that enables
                decision making on and off the field.
              </p>
              <p className="text-xl font-semibold mt-2">Cropin Apps</p>
              <p className="text-gray-600">
                An integrated suite of applications enabling the digital
                transformation of human effort intensive on-field complex
                operations and scouting processes
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image width={2560} height={1056}
                src="https://www.cropin.com/hs-fs/hubfs/cropin_2022/home/Isometric-image.png"
                alt="Cropin Cloud Image"
                className="max-h-[400px] w-auto"
              />
            </div>
            
          </div>
          <button className="bg-green-500 hover:bg-white text-white hover:text-green-500 px-4 py-2 rounded mt-4 transition-all duration-300 ease-in-out border-green-500 border-2">
                Explore Cropin Cloud
              </button>
        </div>
      </div>
    );
  };

export default Cloud