import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import PortfolioContext from "../../context/PortfolioContext";
import theme from "../../styles/theme";
import API from "../../utils/API";
import Project from "./Project";

const ProjectsWrapper = withStyles({
  root: {
    background: theme.palette.background.default,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    minHeight: "100vh",
  },
})(Box);

const Projects = memo(() => {
  const { setLoading } = useContext(PortfolioContext);
  const [projects, setProjects] = useState([]);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
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
      setLoading(true);
    }
  }, [setLoading]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <ProjectsWrapper id="projects">
      {projects.map((proj, idx) => (
        <Project key={proj.id} proj={proj} idx={idx % 2} />
      ))}
    </ProjectsWrapper>
  );
});

export default Projects;
