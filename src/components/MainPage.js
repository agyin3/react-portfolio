import React, { useState, useEffect } from "react";
import Homepage from "./Homepage";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Skills from "./Skills";
import LoaderPage from "./loading/LoaderPage";


const MainPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    })
  if (isLoading) {
    return (
      <>
        <LoaderPage />
      </>
    );
  }
  return (
    <>
      <Homepage />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
};

export default MainPage;
