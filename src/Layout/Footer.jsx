import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoBookSharp } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full dark:navbar border-t dark:border-slate-600 fixed bottom-0 mx-auto h-12 backdrop-blur-lg">
      <div className="max-w-[540px] dark:text-white h-12 mx-auto  flex items-center justify-around">
        <button
          onClick={() => navigate("/")}
          className="w-12 scale-75 h-12  text-3xl grid place-content-center"
        >
          <AiOutlineHome />
        </button>
        <button
          onClick={() => navigate("/courses")}
          className="w-12 scale-75 h-12  text-3xl grid place-content-center"
        >
          <IoBookSharp />
        </button>
        <button
          onClick={() => navigate("/create-course")}
          className="w-12 scale-95 h-12  text-3xl grid place-content-center"
        >
          <FiUpload />
        </button>
        <button className="w-12 scale-75 h-12  text-3xl grid place-content-center">
          <IoSearch />
        </button>
        <button className="w-12 scale-75 h-12  text-3xl grid place-content-center">
          <FaDiscord />
        </button>
      </div>
    </div>
  );
};

export default Footer;
