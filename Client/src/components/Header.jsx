import React from "react";
import { assets } from "../assets/assets";
import {motion} from "framer-motion";
const Header = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center mt-4 mb-20"
     initial={{opacity:0.2,y:100}}
       animate={{opacity:1}}
       transition={{duration:1}}
         whileInview={{opacity:1,y:20}}
       viewport={{once:true}}>

      <div
        className="text-stone-500 inline-flex items-center gap-2
       bg-white px-6 py-1 rounded-full border border neutral-500"
       
      > 
      <p>Best AI Image Generator</p>
        <img src={assets.star_icon} alt="AI" />
      </div>



      <div className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
     
       
      >Turn Text to <span className="text-blue-600">Image</span>,in Seconds.
      </div>

      <p className="text-center max-w-xl max-auto mt-5"
    
      >
        Unleash your creativity with our AI-powered image generator. Transform
        your ideas into stunning visuals in seconds. Try it now!
      </p>
      <button
        className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center
      gap-2 rounded-full hover:scale-105 transition-all duration-700"
      >
        Generate Your Image
        <img className="h-6" src={assets.star_group} alt="" />
      </button>

      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6)
          .fill(0)
          .map((item, index) => (
            <img
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt=""
              key={index}
              width={70}
            />
          ))}
      </div>
      <p className="mt-2 text-neutral-600">Generated Sample Images</p>
    </motion.div>
  );
};

export default Header;
