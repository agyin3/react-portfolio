import React, { useCallback, useEffect, useState } from "react";
import { PortfolioProvider } from "../../context/PortfolioContext";
import About from "../about/About";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MobileDrawer from "../header/MobileDrawer";
import Projects from "../projects/Projects";
import Landing from "./landing/Landing";
import LoaderPage from "../loading/LoaderPage";
import API from "../../utils/API";

const Homepage = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  // Axios call to grab projects
  const fetchProjects = useCallback(async () => {
    try {
      const res = await API.get("/projects");

      // Only need to set favorite projects to state here
      const favorites = await res.data.projects
        .filter((proj) => proj.favorite)
        // Need to split up string into an array
        // In order to map over them in ProjectCard component
        .map((proj) => {
          return { ...proj, languages: proj.languages.split(",") };
        });

      setProjects(favorites);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Helper to control drawer open/close
  const toggleDrawer = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  // Add event listener to window and set scroll pos to state
  useEffect(() => {
    setScrollPos(window.pageYOffset);
    window.addEventListener("scroll", () => {
      setScrollPos(window.pageYOffset);
    });
  }, []);

  // Make axios call to retrieve projects
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <div>
      <PortfolioProvider
        value={{
          loading,
          setLoading,
          scrollPos,
          isOpen,
          toggleDrawer,
          projects,
        }}
      >
        {loading ? (
          <LoaderPage />
        ) : (
          <>
            <MobileDrawer />
            <Header />
            <Landing />
            <About />
            <Projects />
            <Footer />
          </>
        )}
      </PortfolioProvider>
    </div>
  );
};

export default Homepage;
