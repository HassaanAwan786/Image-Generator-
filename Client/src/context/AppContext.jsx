import { createContext, useState } from "react";
import { assets } from "../assets/assets";
export const AppContext = createContext();
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const AppContexProvider = (props) => {
  const [user, setUser] = useState(false); // Replace with real user state later
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || null); // This will store the token in the state and also check if there is a token in the local storage when the app loads. If there is a token in the local storage, it will set it in the state, otherwise it will set it to null. we would add the token to the local storage when the user logs in and remove it when the user logs out. This way, we can persist the user's login state even if they refresh the page or close and reopen the browser.

  const [credit, setCredit] = useState(false); // This will store the credit balance of the user in the state. We will update this state whenever the user generates an image or when they log in to get their current credit balance from the backend.
  const backendUrl = import.meta.env.VITE_BACKEND_URL; // Accessing the backend URL from environment variables file made in the front end

  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { Authorization: token },
      });
      if (data.success) {
        setCredit(data.credit);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error loading credit data: " + error.message);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setCredit(null);
    localStorage.removeItem("token"); // This will remove the token from the local storage when the user logs out. This way, when the user logs out, we will clear their login state and credit balance from both the state and the local storage.
  };

  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]); // This useEffect will run whenever the token state changes. If there is a token, it will call the loadCreditsData function to fetch the user's credit balance from the backend and update the credit state. This way, whenever the user logs in and we set the token, we will automatically fetch their credit balance and update the state accordingly.

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl, //so that we can access it in all front end fine
    credit,
    setCredit,
    token,
    setToken,
    logout,
    loadCreditsData, //we are also adding the loadCreditsData function to the context value so that we can call it from any component that needs to refresh the credit balance after generating an image or performing any action that affects the credit balance.
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContexProvider;
