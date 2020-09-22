import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import theme from "../../styles/theme";
import AboutImg from "./AboutImg";
import AboutText from "./AboutText";

const AboutWrapper = withStyles({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    background: theme.palette.primary.main,
  },
})(Box);

const About = () => (
  <AboutWrapper>
    <AboutImg />
    <AboutText />
  </AboutWrapper>
);

export default About;
