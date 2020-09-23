import React from "react";
import { Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import mobileBg1 from "../../../img/mobile-bg-1.jpg";
import mobileBg2 from "../../../img/mobile-bg-2.jpg";
import desktopBg1 from "../../../img/desktop-bg-1.jpg";
import desktopBg2 from "../../../img/desktop-bg-2.jpg";
import HeroImg from "./HeroImg";

import "./landing.css";

const LandingWrapper = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",

    "@media (min-width: 800px)": {
      flexDirection: "row",
    },
  },
})(Box);

const Landing = () => {
  return (
    <LandingWrapper id="home">
      <HeroImg
        mobileImage={mobileBg1}
        desktopImage={desktopBg1}
        bgColor="rgba(27,38,44, 1)"
        hoverColor="rgba(27,38,44, 0.5)"
        className="slit-in-diagonal-2"
      >
        <Typography component="h1" variant="h1" color="secondary">
          Buddy
        </Typography>
      </HeroImg>
      <HeroImg
        mobileImage={mobileBg2}
        desktopImage={desktopBg2}
        bgColor="rgba(187,225,250, 1)"
        hoverColor="rgba(187,225,250, 0.5)"
        className="slit-in-diagonal-1"
      >
        <Typography component="h1" variant="h1" color="primary">
          Agyin
        </Typography>
      </HeroImg>
    </LandingWrapper>
  );
};

export default Landing;
