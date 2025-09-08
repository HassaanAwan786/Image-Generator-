import React from "react";
import { assets } from "../assets/assets";

const Generatebtn = () => {
  return (
    <div className="pb-16 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 text-neutral-800 py-6 md:py-16">
        See the magic! Try it now
      </h1>
      <button
        className="sm:text-lg text-white bg-black inline-flex items-center 
      gap-2 px-12 py-3 rounded-full bg-black text-while-100 m-auto hover:scale-105 transition-all duration-500"
      >
        Generate Images
        <img src={assets.star_group} alt="" className="h-6" />
      </button>
    </div>
  );
};

export default Generatebtn;
