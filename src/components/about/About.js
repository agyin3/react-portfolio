import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import theme from "../../styles/theme";
import AboutImg from "./AboutImg";
import AboutText from "./AboutText";

const AboutWrapper = withStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    background: theme.palette.primary.main,
    padding: "5rem 0",

    "@media (min-width: 1000px)": {
      flexDirection: "row",
      padding: "0",
    },
  },
})(Box);

const About = () => (
  <AboutWrapper id="about">
    <AboutImg />
    <AboutText />
  </AboutWrapper>
);

export default About;
