import React from "react";
// import { Circles } from "react-loader-spinner";
import "./Preloader.css";

const Loading = () => {
  return (
    <div className="shimmer-card">
      <div className="head" style={{ gap: "110px" }}>
        <div className="title2"></div>
        <div className="circle"></div>
      </div>
      <div>
        <div className="shimmer-line"></div>
        <div className="shimmer-line"></div>
        <div className="feature"></div>
      </div>
    </div>
  );
};

export default Loading;
