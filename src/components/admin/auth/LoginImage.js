import React, { memo } from "react";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import adminBg from "../../../img/admin-bg.jpg";

const Img = withStyles({
  root: {
    backgroundImage: `url(${adminBg})`,
    backgroundPosition: "0 10%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "50%",
    height: "100vh",
  },
})(Box);

const LoginImage = memo(() => <Img />);

export default LoginImage;
