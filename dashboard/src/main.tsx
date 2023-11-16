import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "../app/globals.css";
import Navbar from "./layout/nav-bar.tsx";
import Sidebar from "./layout/side-bar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Sidebar />
    <div className="ml-[108px] mt-[60px] min-h-screen bg-white">
      <App />
    </div>
  </React.StrictMode>
);
