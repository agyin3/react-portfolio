import { Box, Hidden, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import theme from "../../styles/theme";
import React, { memo } from "react";

const MenuLink = withStyles({
  root: {
    fontFamily: "Montserrat, cursive",
    fontSize: "2.4em",
    color: theme.palette.secondary.light,
    "&:hover": {
      fontWeight: 700,
      cursor: "pointer",
      color: theme.palette.secondary.main,
    },
  },
})(Link);

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
      <MenuLink href="#home">Home</MenuLink>
      <MenuLink href="#projects">Projects</MenuLink>
      <MenuLink href="#about">About</MenuLink>
      <MenuLink href="#contact">Contact</MenuLink>
      <MenuLink href="https://buddyagyin.blog" target="_blank">
        Blog
      </MenuLink>
    </LinkWrapper>
  </Hidden>
));

export default NavLinks;
