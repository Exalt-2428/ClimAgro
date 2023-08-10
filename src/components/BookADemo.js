import React from 'react'

const BookADemo = () => {
    return (
      <div className="px-4 py-8 bg-gray-700 text-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-red-300 text-center text-2xl font-bold mb-4">
            Enabling the Agri-Value Chain
          </h2>
          <p className="text-gray-600 mb-8">
            Digitize every farm | Trace food produce | Predictive Intelligence to
            enable decisions
          </p>
          <img
            src="https://www.cropin.com/hubfs/cropin_2021/home/agri-value-chain.svg"
            alt="Agri-Value Chain"
            className="w-full h-auto"
          />
          <button className="bg-green-500 hover:bg-white text-white hover:text-green-500 px-4 py-2 rounded mt-4 transition-all duration-300 ease-in-out">
            BOOK A DEMO
          </button>
        </div>
      </div>
    );
  };

export default BookADemo