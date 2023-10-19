import React from "react";
// import { Circles } from "react-loader-spinner";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="preloader-container">
      <div className="preloader">
        <div className="loader" />
        <div className="preloader-name">Loading...</div>
      </div>
    </div>
  );
};

export default Loading;
