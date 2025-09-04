import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets"; // make sure this file actually exists
import { AppContext } from "../context/AppContext";
import Buy from "../pages/Result";

const NavBar = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4">
      {/* Logo or leftside */}

      {/* If assets.logo is broken, replace with a placeholder */}
      <img
        src={assets.Backcap}
        alt="Logo"
        className="w-38 sm:w-42 lg:w-60"
        width={150}
      />
      <p className="text-semibold text-gray-600">
        Copy Rights reserved &copy; 2024 Backcap AI
      </p>

      {/* Right side */}

      <div className="inline-flex items-center gap-0.5">
        <button className="flex items-center gap-2  px-4 sm:px-6 py-1.5 sm:py-3 rounded-full transition-all duration-700">
          <img className="hover:scale-105 " src={assets.twitter_icon} alt="" />
        </button>

        <button className="flex items-center gap-2  px-4 sm:px-6 py-1.5 sm:py-3 rounded-full transition-all duration-700">
          <img className="hover:scale-105" src={assets.instagram_icon} alt="" />
        </button>

        <button className="flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full transition-all duration-700">
          <img className=" hover:scale-105" src={assets.facebook_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
