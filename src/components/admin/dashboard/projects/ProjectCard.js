import React from "react";
import { withStyles } from "@material-ui/styles";
import { Paper } from "@material-ui/core";
import theme from "../../../../styles/theme";
import ProjectText from "./ProjectText";

const ProjectPaper = withStyles({
  root: {
    width: "85%",
    minHeight: "30rem",
    padding: "3rem 0",
    margin: "2.5rem 0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: theme.palette.primary.dark,
  },
})(Paper);

const ProjectCard = ({ project, fetchProjects }) => {
  return (
    <ProjectPaper>
      <img
        src={project.image}
        style={{ width: "25%" }}
        alt={`${project.name} Screenshot`}
      />
      <ProjectText fetchProjects={fetchProjects} project={project} />
    </ProjectPaper>
  );
};

export default ProjectCard;
