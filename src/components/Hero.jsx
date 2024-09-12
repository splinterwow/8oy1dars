import React from "react";
import maks from "../assets/images/mg.jpg";

function Hero() {
  return (
    <div className="mx-auto flex justify-between max-w-[1440px] w-full">
      <div className="one-side flex ml-10 flex-col justify-center w-[700px] flex-grow">
        <p className="text-gray-500 text-sm">--Webflow Design Agency</p>
        <h2 className="text-4xl font-bold mt-2">
          A top-notch Webflow Design Agency
        </h2>
        <p className="text-gray-700 mt-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
          vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus,
          elit massa sed.
        </p>
        <div className="mt-6">
          <button className="bg-[#4A3AFF] text-white font-bold py-2 px-4 rounded-full shadow-lg mr-4 hover:bg-blue-600">
            Get started
          </button>
          <button className="bg-transparent border border-[#4A3AFF] text-[#4A3AFF] font-bold py-2 px-4 rounded-full shadow-lg hover:bg-[#4A3AFF] hover:text-white">
            Learn more
          </button>
        </div>
      </div>
      <div className="two-side flex mr-10 justify-end">
        <img className="ml-[800px]" src={maks} alt="Maks Group" width={550} />
      </div>
    </div>
  );
}

export default Hero;