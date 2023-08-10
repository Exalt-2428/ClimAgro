import React from 'react'
import { useState } from "react";
import Image from 'next/image';

const images = [
    "https://www.cropin.com/hs-fs/hubfs/cropin_2022/home/cropin-cloud-website-banner.jpg",
    "https://www.cropin.com/hs-fs/hubfs/Version%201.png",
    "https://www.cropin.com/hs-fs/hubfs/Homepage%20banner%20-%20Ag-celerate%20(1280%20%C3%97%20528%20px)%20Updated.png",
  ];
  
  const ShowComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const changeImage = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-full">
          <Image priority="true" width={2560} height={1056}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-full h-auto"
          />
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center focus:outline-none ${
                  currentIndex === index ? "bg-orange-500" : ""
                }`}
                onClick={() => changeImage(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default ShowComponent