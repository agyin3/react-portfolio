import { AppBar, Fade, Hidden, IconButton, Toolbar } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import theme from "../../styles/theme";
import React, { useContext } from "react";
import NavLinks from "./NavLinks";
import PortfolioContext from "../../context/PortfolioContext";

const TopBar = withStyles({
  root: {
    background: theme.palette.primary.light,
  },
})(AppBar);

const Header = React.memo(() => {
  const { toggleDrawer } = useContext(PortfolioContext);

  return (
    <Fade in={true} timeout={750} style={{ transitionDelay: "1200ms" }}>
      <TopBar position="fixed">
        <Toolbar variant="dense">
          <Hidden mdUp>
            <IconButton
              color="secondary"
              onClick={toggleDrawer}
              size="medium"
              fontSize="large"
            >
              <MenuIcon color="secondary" fontSize="large" />
            </IconButton>
          </Hidden>
          <NavLinks />
        </Toolbar>
      </TopBar>
    </Fade>
  );
});

export default Header;
