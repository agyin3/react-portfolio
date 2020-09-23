import { Box, Hidden, Link as MuiLink } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import theme from "../../styles/theme";
import React, { memo } from "react";
import { Link } from "react-scroll";
import "./header.css";

const MenuLink = withStyles({
  root: {
    fontFamily: "Montserrat, cursive",
    fontSize: "2.4em",
    color: theme.palette.secondary.light,
    textDecoration: "none",
    "&:hover": {
      fontWeight: 700,
      cursor: "pointer",
      color: theme.palette.secondary.main,
      textDecoration: "underline",
    },
  },
})(({ classes, children, to }) => (
  <Link
    to={to}
    activeClass="active"
    spy={true}
    smooth={true}
    duration={750}
    className={classes.root}
  >
    {children}
  </Link>
));

const BlogLink = withStyles({
  root: {
    fontFamily: "Montserrat, cursive",
    fontSize: "2.4em",
    color: theme.palette.secondary.light,
    textDecoration: "none",
    "&:hover": {
      fontWeight: 700,
      cursor: "pointer",
      color: theme.palette.secondary.main,
      textDecoration: "underline",
    },
  },
})(MuiLink);

const LinkWrapper = withStyles({
  root: {
    display: "flex",
    width: "60%",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "space-between",
  },
})(Box);

const NavLinks = memo(() => (
  <Hidden smDown>
    <LinkWrapper>
      <MenuLink to="home">Home</MenuLink>
      <MenuLink to="about">About</MenuLink>
      <MenuLink to="projects">Projects</MenuLink>
      <MenuLink to="contact">Contact</MenuLink>
      <BlogLink href="https://buddyagyin.blog" target="_blank">
        Blog
      </BlogLink>
    </LinkWrapper>
  </Hidden>
));

export default NavLinks;
