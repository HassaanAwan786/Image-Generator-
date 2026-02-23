

import { assets } from "../assets/assets";
import React, { useState } from "react";
import { plans } from "../assets/assets";
import {motion} from "framer-motion";

const BuyCredit = () => {
  const [user,setUser] = useState(false)
  return (
  <div className="min-h-[80vh] text-center pt-14 mb-10 px-4 sm:px-6">
    <motion.button
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    whileHover={{scale:1.05}}
    whileTap={{scale:0.95}}
    
    className="border border-gray-400 px-10 py-2 rounded-full mb-6">
      Our plans
    </motion.button>
    <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
      Choose the plan 
    </h1>
   <motion.div 
 initial={{ opacity: 0.2, y: 100 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true }}
   transition={{ duration: 1 }}

   
   
   className="flex flex-wrap justify-center gap-6 text-left sm:gap-10">
    {plans.map((plan, index)=>(
      <div key={index}
      className="bg-white drop-shadow-lg p-6 rounded-lg py-12 px-8
      text-gray-600 hover:scale-105 transition-all duration-500"
      >
        <img width={40} src={assets.logo_icon} alt="" />
       <p className="mt-3 mb-1 font-semibold">{plan.id}</p>
       <p className="text-sm">{plan.desc}</p>
       <p className='mt-6'>${plan.price}</p>
       <p><span className='font-semibold text-xl'>${plan.price}</span>/{plan.credits} credits</p>
       <motion.button 
       initial={{opacity:0,y:20}}
       animate={{opacity:1,y:0}}
       transition={{duration:1}}
       whileHover={{scale:1.05}}
       whileTap={{scale:0.95}}
       className="bg-black text-white border border-gray-400 px-10 py-2 rounded-lg mt-6 hover:scale-105 transition-all duration-500 color-black">
        {user?"Purchase":"Get Started"}
      </motion.button> 
      </div>
    ))}
  
   </motion.div>

  </div>)
};

export default BuyCredit;
