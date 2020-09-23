import { AppBar, Fade, Hidden, IconButton, Toolbar } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import theme from "../../styles/theme";
import React from "react";
import NavLinks from "./NavLinks";

const TopBar = withStyles({
  root: {
    background: theme.palette.primary.light,
  },
})(AppBar);

const Header = React.memo(() => (
  <Fade in={true} timeout={750} style={{ transitionDelay: "1200ms" }}>
    <TopBar position="fixed">
      <Toolbar variant="dense">
        <Hidden mdUp>
          <IconButton size="medium" fontSize="large">
            <MenuIcon fontSize="large" />
          </IconButton>
        </Hidden>
        <NavLinks />
      </Toolbar>
    </TopBar>
  </Fade>
));

export default Header;
