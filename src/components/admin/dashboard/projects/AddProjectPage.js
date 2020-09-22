import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { memo } from "react";
import SideBar from "../SideBar";
import AddProject from "./AddProject";

const SimpleContainer = withStyles({
  root: {
    display: "flex",
  },
})(Box);

const AddProjectPage = memo(() => (
  <SimpleContainer>
    <SideBar />
    <AddProject />
  </SimpleContainer>
));

export default AddProjectPage;
