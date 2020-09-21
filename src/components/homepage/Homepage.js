import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Projects from "../projects/Projects";
import Landing from "./landing/Landing";

const Homepage = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    setScrollPos(window.pageYOffset);
    window.addEventListener("scroll", () => {
      setScrollPos(window.pageYOffset);
    });
  }, []);

  return (
    <div>
      <Header />
      <Landing />
      <Projects scrollPos={scrollPos} />
    </div>
  );
};

export default Homepage;
