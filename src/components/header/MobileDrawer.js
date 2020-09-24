import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Link as MuiLink,
  makeStyles,
} from "@material-ui/core";
import { Home, Info, Language, PersonAdd, WebAsset } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-scroll";
import PortfolioContext from "../../context/PortfolioContext";
import theme from "../../styles/theme";
import "./header.css";

const useStyles = makeStyles({
  drawer: {
    width: 250,
  },
  drawerPaper: {
    width: 250,
    background: theme.palette.primary.light,
  },
  menuLink: {
    fontFamily: "Montserrat, cursive",
    fontSize: "2.4em",
    color: theme.palette.secondary.light,
    textDecoration: "none",
  },
});

// const Link = withStyles({
//   root: {
//     fontFamily: "Montserrat, cursive",
//     fontSize: "2.4em",
//     color: theme.palette.secondary.light,
//     textDecoration: "none",
//   },
// })(({ classes, children, to }) => (
//   <Link
//     to={to}
//     activeClass="active"
//     spy={true}
//     smooth={true}
//     duration={750}
//     className={classes.root}
//   >
//     {children}
//   </Link>
// ));

const MobileDrawer = () => {
  const { isOpen, toggleDrawer } = useContext(PortfolioContext);
  const { drawer, drawerPaper, menuLink } = useStyles();

  return (
    <Drawer
      className={drawer}
      open={isOpen}
      onClose={toggleDrawer}
      classes={{ paper: drawerPaper }}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <Home
              fontSize="large"
              style={{ color: theme.palette.secondary.light }}
            />
          </ListItemIcon>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={750}
            className={menuLink}
            onClick={toggleDrawer}
          >
            Home
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <Info
              fontSize="large"
              style={{ color: theme.palette.secondary.light }}
            />
          </ListItemIcon>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={750}
            className={menuLink}
            onClick={toggleDrawer}
          >
            About
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <WebAsset
              fontSize="large"
              style={{ color: theme.palette.secondary.light }}
            />
          </ListItemIcon>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={750}
            className={menuLink}
            onClick={toggleDrawer}
          >
            Projects
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <PersonAdd
              fontSize="large"
              style={{ color: theme.palette.secondary.light }}
            />
          </ListItemIcon>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={750}
            className={menuLink}
            onClick={toggleDrawer}
          >
            Contact
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <Language
              fontSize="large"
              style={{ color: theme.palette.secondary.light }}
            />
          </ListItemIcon>
          <MuiLink
            className={menuLink}
            href="https://buddyagyin.blog"
            onClick={toggleDrawer}
          >
            Blog
          </MuiLink>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MobileDrawer;
