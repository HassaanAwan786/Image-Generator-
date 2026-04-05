import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import NavBar from "./components/NavBar"; // ✅ FIX: import NavBar
import Footer from "./components/Footer"; // ✅ FIX: import Footer
import Login from "./components/Login";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
const App = () => {
  const { showLogin } = useContext(AppContext);
  return (
    <div className=" px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer position="bottom-right" />
      {/* This is the container for the toast notifications that we will use to show success and error messages to the user. We have set the position of the toast notifications to the bottom right corner of the screen. We can customize the appearance and behavior of the toast notifications using the options provided by the react-toastify library. */}
      <NavBar /> {/* ✅ FIX: Add NavBar component */}
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
