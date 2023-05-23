import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./Routers/Routers.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
