import React, { memo } from "react";
import SideBar from "./SideBar";
import { withStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import ProjectPage from "./projects/ProjectPage";

const DashboardContainer = withStyles({
  root: {
    display: "flex",
  },
})(Box);

const Dashboard = memo(() => {
  return (
    <DashboardContainer>
      <SideBar />
      <ProjectPage />
    </DashboardContainer>
  );
});

export default Dashboard;
