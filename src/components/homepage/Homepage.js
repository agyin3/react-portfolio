import React, { useEffect, useState } from "react";
import { PortfolioProvider } from "../../context/PortfolioContext";
import About from "../about/About";
import Header from "../header/Header";
import Projects from "../projects/Projects";
import Landing from "./landing/Landing";

const Homepage = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setScrollPos(window.pageYOffset);
    window.addEventListener("scroll", () => {
      setScrollPos(window.pageYOffset);
    });
  }, []);

  return (
    <div>
      <PortfolioProvider value={{ loading, setLoading, scrollPos }}>
        <Header />
        <Landing />
        <About scrollPos={scrollPos} />
        <Projects scrollPos={scrollPos} />
      </PortfolioProvider>
    </div>
  );
};

export default Homepage;
