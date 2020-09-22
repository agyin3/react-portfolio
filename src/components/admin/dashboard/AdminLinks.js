import { Box, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { memo } from "react";
import theme from "../../../styles/theme";
import adminLinks from "../../../utils/adminLinks";

const MenuLink = withStyles({
  root: {
    fontFamily: "Montserrat, cursive",
    fontSize: "2.8rem",
    color: theme.palette.secondary.light,
    "&:hover": {
      fontWeight: 700,
      cursor: "pointer",
      color: theme.palette.secondary.main,
    },
  },
})(Link);

const LinkContainer = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "40%",
  },
})(Box);

const AdminLinks = memo(() => (
  <LinkContainer>
    {adminLinks.map((link) => (
      <MenuLink
        key={link.text}
        href={link.path}
        onClick={link.text.includes("Sign") ? () => localStorage.clear() : null}
      >
        {link.text}
      </MenuLink>
    ))}
  </LinkContainer>
));

export default AdminLinks;
