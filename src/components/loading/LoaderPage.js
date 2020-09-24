import React from "react";
import LottieLoader from "../../utils/LottieLoader";
import loader from "../../utils/loader.json";
import theme from "../../styles/theme";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const SimpleContainer = withStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: theme.palette.primary.main,
  },
})(Box);

const LoaderPage = () => (
  <SimpleContainer>
    <LottieLoader lottie={loader} />
  </SimpleContainer>
);

export default LoaderPage;
