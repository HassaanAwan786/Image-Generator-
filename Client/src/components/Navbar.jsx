import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets"; // make sure this file actually exists
import { AppContext } from "../context/AppContext";
import Buy from "../pages/Result";  


const NavBar = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  const {setShowLogin} = useContext(AppContext);
 

  return (
    <div className="flex items-center justify-between py-4">
      {/*Main div which have logo and on right side divs on condition*/}
      {/* Logo or leftside */}
      <Link to="/">
        {/* If assets.logo is broken, replace with a placeholder */}
        <img src={assets.Backcap} alt="Logo" className="w-38 sm:w-42 lg:w-60" />
      </Link>
      {/* Right side */}
      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-5">
            <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105  transition-all duration-700">
              <img className="w-5" src={assets.credit_star} alt=" "></img>
              <p
                onClick={() => navigate("/buy")}
                className="text-xs sm:text-sm font-medium text-gray-600"
              >
                Credit Left: 50
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi,Hassaan</p>
            <div className="relative group">
              <img
                className="w-10  drop shadow rounded-full"
                src={assets.profile_icon}
                alt="Profile"
              />
              <div
                className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt 12 "
                style={{
                  minWidth: "150px",
                  backgroundColor: "rgba(252, 252, 252, 0.9)",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  minHeight: "50px",
                  padding: "10px",
                  width: "max-content",
                  maxWidth: "200px",
                }}
              >
                <ul className="list-none bg-white rounded-md border text-sm">
                  <li
                    className="py-1 px-2 cursor-pointer pr-10 hover:scale-105 transition-all duration-700"
                    style={{ backgroundColor: "rgba(213, 240, 239, 0.9)" }}
                  >
                    Profile Setting
                  </li>
                  <li
                    className="py-1 px-2 cursor-pointer pr-10 hover:scale-105 transition-all duration-700"
                    style={{ backgroundColor: "rgba(213, 240, 239, 0.9)" }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              Pricing
            </p>
            <button onClick={()=>{setShowLogin(true)}} className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
