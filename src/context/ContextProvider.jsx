import React, { useEffect, useState } from "react";
import myContext from "./myContext";
const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);
  return (
    <>
      <myContext.Provider value={{ theme, setTheme }}>
        {children}
      </myContext.Provider>
    </>
  );
};

export default ContextProvider;
