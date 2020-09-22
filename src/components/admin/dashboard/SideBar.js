import { Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { memo } from "react";
import theme from "../../../styles/theme";
import AdminLinks from "./AdminLinks";

const SideBarContainer = withStyles({
  root: {
    width: "25%",
    background: theme.palette.primary.light,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    paddingTop: "2.5rem",
    height: "100vh",
  },
})(Box);

const SideBar = memo(() => (
  <SideBarContainer>
    <Typography variant="h2" component="p">
      Buddy's <br /> Dashboard
    </Typography>
    <AdminLinks />
  </SideBarContainer>
));

export default SideBar;
