import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hello from "../components/sections/Hello";
import Work from "../components/sections/Work";

export const Home = () => {
  return (
    <>
      <Hello />
      <Work />
      <About />
      <Contact />
    </>
  );
};
