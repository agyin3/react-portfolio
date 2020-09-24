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
  const { projects } = useContext(PortfolioContext);

  return (
    <ProjectsWrapper id="projects">
      {projects.map((proj, idx) => (
        <Project key={proj.id} proj={proj} idx={idx % 2} />
      ))}
    </ProjectsWrapper>
  );
});

export default Projects;
