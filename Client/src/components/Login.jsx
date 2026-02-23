import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [State, setState] = useState("Login");
  const {setShowLogin} = useContext(AppContext);
  useEffect(()=>{
    document.body.style.overflow = "hidden";

    return()=>{
      document.body.style.overflow = "unset";
    }
    
  },[])
  return <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
    <form className="relative bg-white p-10 rounded-lg text-slate-500 "
    >
        <h1 className="text-center text-2xl text-neutral-700 font-medium ">{State}</h1>
        {State =="Login" &&<p className="text-sm text-center py-2 bottom-2">welcome back! Please sign in to continue</p>}
        {State !=="Login" &&<div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img flex-inline height={20} width={20} src={assets.user_icon} alt="" />
            <input type="text" placeholder="Enter your name" required/>
            
        </div>}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.email_icon} alt="" />
            <input type="text" placeholder="Email" required/>
            
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.lock_icon} alt="" />
            <input type="text" placeholder="Password" required/>
            
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot Password?</p>
      
            <button className="bg-black flex items-center 
      gap-2 px-10 py-2 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500"
      >{State=="Login"?"Login":"Sign Up"}</button>
       {State=="Login"?<p className="text-sm text-gray-600 mt-5 cursor-pointer text-center">Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={()=>{setState("Sign Up")}}>Sign up</span></p>
         :<p className="text-sm text-gray-600 mt-5 cursor-pointer text-center">Already have an account? <span className="text-blue-600 cursor-pointer" onClick={()=>{setState("Login")}}>Login</span></p>}
       <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="" className="absolute top-5 right-5 cursor-pointer" />

    </form>
  </div>;
};

export default Login;