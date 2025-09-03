import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AppContexProvider from "./context/AppContext.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContexProvider>
      <App />
    </AppContexProvider>
  </BrowserRouter>
);
