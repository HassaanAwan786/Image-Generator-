import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContexProvider = (props) => {
  const [user, setUser] = useState(true); // Replace with real user state later
  const value = {
    setUser,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContexProvider;
