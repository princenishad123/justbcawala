import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="w-full fixed top-56px left-0 bg-slate-100 dark:bg-slate-400 h-screen z-30 grid place-content-center">
      <div className="loader dark:text-white"></div>
    </div>
  );
};

export default Loader;
