import { Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { memo } from "react";
import theme from "../../../../styles/theme";
import ProjectList from "./ProjectList";

const ProjectContainer = withStyles({
  root: {
    width: "80%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    background: theme.palette.background.default,
  },
})(Box);

const ProjectPage = memo(() => (
  <ProjectContainer>
    <Typography component="h2" variant="h2">
      Project List
    </Typography>
    <ProjectList />
  </ProjectContainer>
));

export default ProjectPage;
