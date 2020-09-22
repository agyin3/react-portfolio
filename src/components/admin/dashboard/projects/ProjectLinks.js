import React from "react";
import { Box, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const ProjLink = withStyles({
  root: {
    fontFamily: "Montserrat, cursive",
    fontSize: "2rem",
    color: "#FFBA0A",
    "&:hover": {
      fontWeight: 700,
      cursor: "pointer",
      color: "#CCA43B",
    },
  },
})(Link);

const LinkContainer = withStyles({
  root: {
    width: "100%",
    height: "20%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
})(Box);

const ProjectLinks = ({ github, url }) => (
  <LinkContainer>
    <ProjLink href={github}>Github Repo</ProjLink>
    <ProjLink href={url}>Deployed Site</ProjLink>
    {/* Need to add edit buttons */}
  </LinkContainer>
);

export default ProjectLinks;
