import { Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import ProjectHeading from "./ProjectHeading";
import ProjectLinks from "./ProjectLinks";

const ContentContainer = withStyles({
  root: {
    width: "55%",
    minHeight: "30rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
  },
})(Box);

const DescText = withStyles({
  root: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2.4rem",
    color: "#ECF7FE",
  },
})(Typography);

const ProjectText = ({ project, fetchProjects }) => (
  <ContentContainer>
    <ProjectHeading project={project} fetchProjects={fetchProjects} />
    <DescText>{project.description}</DescText>
    <ProjectLinks github={project.github} url={project.url} />
  </ContentContainer>
);

export default ProjectText;
