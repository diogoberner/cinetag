import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./AppRoutes";
import { MoviesProvider } from "context/MoviesContext/MoviesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoviesProvider>
      <AppRoutes />
    </MoviesProvider>
  </React.StrictMode>
);
