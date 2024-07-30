import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import myContext from "../context/myContext";
import toast, { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  const { theme } = useContext(myContext);

  return (
    <div className={`${theme == "dark" ? "dark" : "light"} overflow-hidden`}>
      <Navbar />
      <main className="w-full px-3  md:px-12 overflow-y-scroll dark:bg-slate-900 dark:text-white wrapper">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
