import { makeStyles, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import theme from "../../styles/theme";
import FooterLinks from "./FooterLinks";

const FooterContainer = withStyles({
  root: {
    height: "10vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: theme.palette.primary.light,
    padding: "2rem",
  },
})(({ classes, children }) => (
  <footer id="contact" className={classes.root}>
    {children}
  </footer>
));

const Footer = () => {
  return (
    <FooterContainer>
      <Typography color="secondary" style={{ fontSize: "2.5rem" }}>
        &#169; 2020 Buddy Agyin
      </Typography>
      <FooterLinks />
    </FooterContainer>
  );
};

export default Footer;
