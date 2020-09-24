import React, { useCallback, useEffect, useState } from "react";
import { PortfolioProvider } from "../../context/PortfolioContext";
import About from "../about/About";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MobileDrawer from "../header/MobileDrawer";
import Projects from "../projects/Projects";
import Landing from "./landing/Landing";

const Homepage = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    setScrollPos(window.pageYOffset);
    window.addEventListener("scroll", () => {
      setScrollPos(window.pageYOffset);
    });
  }, []);

  return (
    <div>
      <PortfolioProvider
        value={{ loading, setLoading, scrollPos, isOpen, toggleDrawer }}
      >
        <MobileDrawer />
        <Header />
        <Landing />
        <About />
        <Projects />
        <Footer />
      </PortfolioProvider>
    </div>
  );
};

export default Homepage;
