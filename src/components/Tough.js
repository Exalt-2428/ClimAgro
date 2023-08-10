import React from 'react'

const Tough = () => {
    return (
      <div className="px-4 py-8 bg-gray-700 text-center">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">
          <h2 className="text-red-300 text-center text-2xl font-bold mb-4">
            Solving Complex Problems Across the Agriculture Value Chain
          </h2>
          <p className="text-gray-600 mb-8">
            Building a global real-time ag-ecosystem intelligence platform
          </p>
  
          <div className="grid grid-cols-4 gap-8 md:w-1/2">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="p-2 rounded shadow text-center">
                {index === 0 && (
                  <div className="flex flex-col items-center">
                    <img
                      src="https://www.cropin.com/hubfs/cropin_2021/RootTrace/use/farming-companies.svg"
                      alt="Grow"
                      className=""
                    />
                    <p className="text-xs mt-4">
                      Farming <br />
                      Companies
                    </p>
                  </div>
                )}
                {index === 1 && (
                  <div className="flex flex-col items-center">
                    <img
                      src="https://www.cropin.com/hubfs/cropin_2021/icons/seeds.svg"
                      alt="Grow"
                      className=""
                    />
                    <p className="text-xs mt-4">
                      Seed Production <br />
                      Companies
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="md:w-1/2 mb-4">
            <img
              src="https://www.cropin.com/hubfs/cropin_2022/home/hero-slider/Impacting.png"
              alt="Impact Image"
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 w-full">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="text-red-500 p-2 rounded shadow">
                {index === 0 && (
                  <div className="flex flex-col items-center">
                    <img
                      src="https://www.cropin.com/hubfs/cropin_2022/cloud-launch/icons/Cropin-grow.svg"
                      alt="Grow"
                      className="mt-4 h-12"
                    />
                    <p className="text-xl mt-4 mb-2">
                      Cropin Grow (SmartFarm Plus)
                    </p>
                    <p className="p-4 justify-start mb-4">
                      A farm monitoring and management solution to help you geotag
                      your farms, digitize farm/farmer records, share advisory,
                      monitor crop productivity, improve farm efficiency, and
                      boost field officer productivity.{" "}
                    </p>
                    <button className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                      <a href="#">Learn More</a>
                    </button>
                  </div>
                )}
  
                {index === 1 && (
                  <div className="flex flex-col items-center">
                    <img
                      src="https://www.cropin.com/hubfs/cropin_2022/cloud-launch/icons/connect.svg"
                      alt="Connect"
                      className="mt-4 h-12"
                    />
                    <p className="text-xl mt-4 mb-2">
                      Cropin Connect (AcreSquare)
                    </p>
                    <p className="p-4 justify-start mb-4">
                      Easy-to-use, seamless communication application that
                      supports your
                      <span className="text-green-400">
                        {" "}
                        <a href="#">digital farming</a>
                      </span>{" "}
                      initiatives. It helps connect growers, agri-businesses, and
                      field officers to digitalize farm operations.{" "}
                    </p>
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                      <a href="#">Learn More</a>
                    </button>
                  </div>
                )}
                {index === 2 && (
                  <div className="flex flex-col items-center">
                    <img
                      src="https://www.cropin.com/hubfs/cropin_2022/cloud-launch/icons/Trace.svg"
                      alt="Trace"
                      className="mt-4 h-12"
                    />
                    <p className="text-xl mt-4 mb-2">Cropin Trace (RootTrace)</p>
                    <p className="p-4 justify-start mb-4">
                      QR code-enabled
                      <span className="text-green-400">
                        {" "}
                        <a href="#">farm-to-fork </a>
                      </span>
                      traceability solution to track and meet quality benchmarks.
                      Eliminate counterfeiting and ensure that everyone involved
                      in bringing food to our table is recognized and rewarded.
                    </p>
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                      <a href="#">Learn More</a>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Tough