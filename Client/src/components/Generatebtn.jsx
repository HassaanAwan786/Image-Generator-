import React from "react";
import { assets } from "../assets/assets";
import {motion} from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Generatebtn = () => {

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
    <motion.div 
    initial={{opacity:0,y:20}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className="pb-16 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 text-neutral-800 py-6 md:py-16">
        See the magic! Try it now
      </h1>
      <motion.button onClick={()=>{onClickHandler()}}
        className="sm:text-lg text-white bg-black inline-flex items-center 
      gap-2 px-12 py-3 rounded-full text-while-100 m-auto hover:scale-105 transition-all duration-500"
      >
        Generate Images
        <img src={assets.star_group} alt="" className="h-6" />
      </motion.button>
    </motion.div>
  );
};

export default Generatebtn;
