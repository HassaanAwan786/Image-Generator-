import { createContext, useState } from "react";
import { assets } from "../assets/assets";
export const AppContext = createContext();

const AppContexProvider = (props) => {
  const [user, setUser] = useState(false); // Replace with real user state later
  const [showLogin, setShowLogin] = useState(false);
  
  const value = {
    user, setUser,showLogin, setShowLogin
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContexProvider;
