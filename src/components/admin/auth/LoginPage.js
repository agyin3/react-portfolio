import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { memo } from "react";
import Login from "./Login";
import LoginImage from "./LoginImage";

const LoginWrapper = withStyles({
  root: {
    display: "flex",
    background: null,
  },
})(Box);

const LoginPage = memo(() => (
  <LoginWrapper>
    <LoginImage />
    <Login />
  </LoginWrapper>
));

export default LoginPage;
