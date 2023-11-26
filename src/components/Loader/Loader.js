import React from "react";
import "./loader.css";
import { CircularProgress } from "@mui/material";
// loader function for every component using MUI
const Loader = () => {
  return (
    <div className="loader-component">
      <CircularProgress />
    </div>
  );
};

export default Loader;
