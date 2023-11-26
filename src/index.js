import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DetailsProvider from "./context/DetailsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DetailsProvider>
        <App />
      </DetailsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
