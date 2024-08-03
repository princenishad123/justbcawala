import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Loader from "../Components/Loader/Loader";

const Home = () => {
  const [isLoader, setIsloader] = useState(false);
  useEffect(() => {
    window.addEventListener("onload", () => {
      setIsloader(true);
    });
  });
  return (
    <Layout>
      {isLoader ? <Loader /> : ""}
      <div className="w-full  h-auto">
        <h1 className="text-7xl font-semibold max-sm:text-xl text-center">
          Welcome to tech world!
        </h1>

        <p className="text-center">Home page is under maintaning</p>
        <p className="text-center">Created by Prince Nishad</p>
      </div>
    </Layout>
  );
};

export default Home;
