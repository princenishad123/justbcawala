import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Loader from "../Components/Loader/Loader";

const Home = () => {
  console.log("hello");
  const [isLoader, setIsloader] = useState(false);
  useEffect(() => {
    window.addEventListener("onload", () => {
      setIsloader(true);
    });
  });
  return (
    <Layout>
      {isLoader ? <Loader /> : ""}
      <div className="w-full h-full grid place-content-center">
        <h1 className="text-7xl font-semibold">Welcome to tech world!</h1>

        <span className="text-center text-xl drop-shadow-lg ">
          Home page is under maintaning
        </span>
        <span className="text-center">Created by Prince Nishad</span>
      </div>
    </Layout>
  );
};

export default Home;
