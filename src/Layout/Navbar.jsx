import React, { useContext } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import myContext from "../context/myContext";
import prince from "../assets/prince.jpg";
const Navbar = () => {
  const { theme, setTheme } = useContext(myContext);
  const switchDarkMode = () => {
    if (theme == "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  return (
    <nav className=" backdrop-blur-lg dark:navbar  dark:text-white w-full h-12 fixed top-0 px-1 md:px-12 flex items-center justify-between">
      <div>
        <h2 className="text-xl"></h2>
      </div>
      <div className="flex items-center gap-6  ">
        <button
          onClick={switchDarkMode}
          className="w-8 h-8 bg-transparent grid place-content-center text-xl "
        >
          {theme == "dark" ? <CiLight /> : <CiDark />}
        </button>
        <h3 className="font-semibold max-md:hidden">Hii, Prince Nishad</h3>
        <div className=" w-10 h-10 border rounded-md overflow-hidden">
          <img src={prince} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
