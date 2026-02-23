import React from "react";
import { assets } from "../assets/assets";
import {motion} from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const {user,setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();
const onClickHandler = () => {
 if(user){
  navigate("/result");
 }
 else{
  setShowLogin(true);
 }
}
  return (
    <motion.div className="flex flex-col items-center justify-center mt-4 mb-20"
     initial={{opacity:1,y:20}}
       transition={{duration:1}}
         whileInview={{opacity:1, y:0 }}
       viewport={{once: true}}>

      <motion.div
        className="text-stone-500 inline-flex items-center gap-2
       bg-white px-6 py-1 rounded-full border border neutral-500"
        initial={{opacity:0.2,y:-20}}
       animate={{opacity:1,y:0}}
       transition={{delay:0.2, duration:0.8}}
      > 
      <p>Best AI Image Generator</p>
        <img src={assets.star_icon} alt="AI" />
      </motion.div>



      <motion.h1 
      initial={{opacity:0,y: 20}}
       animate={{opacity:1,y:0}}
       transition={{delay:0.4, duration:0.8}}

      className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
      >Turn Text to <span className="text-blue-600"
     
      >Image</span>,in Seconds.
      </motion.h1>

      <motion.p className="text-center max-w-xl max-auto mt-5"
     initial={{opacity:0,y: 20}}
       animate={{opacity:1,y:0}}
       transition={{delay:0.6, duration:0.8}}
      >
        Unleash your creativity with our AI-powered image generator. Transform
        your ideas into stunning visuals in seconds. Try it now!
      </motion.p>
      <motion.button onClick={()=>{onClickHandler()}}
        className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center
      gap-2 rounded-full "
      whileHover={{scale:1.05}}
      whileTap={{scale:0.95}}
      initial={{opacity:0,}}
      animate={{opacity:1}}
      transition={{default:{duration:0.5},opacity:{delay:0.8,duration:1}}}
      >
        Generate Your Image
        <img className="h-6" src={assets.star_group} alt="" />
      </motion.button>

      <motion.div 
      initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{delay:1, duration:1}}
      className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6)
          .fill(0)
          .map((item, index) => (
            <motion.img
            whileHover={{ y: -5, scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
          
         
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt=""
              key={index}
              width={70}
            />
          ))}
      </motion.div>
      <motion.p 
      initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{delay:1.2, duration:0.8}}
      className="mt-2 text-neutral-600">Generated Sample Images</motion.p>
    </motion.div>
  );
};

export default Header;
