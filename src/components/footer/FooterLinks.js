import { Box, makeStyles, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { Email, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import theme from "../../styles/theme";

const LinkContainer = withStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "40%",
  },
})(Box);

const useStyles = makeStyles({
  hover: {
    "&:hover": {
      color: `${theme.palette.secondary.dark} !important`,
      cursor: "pointer",
    },
  },
});

const FooterLinks = () => {
  const { hover } = useStyles();
  return (
    <LinkContainer>
      <GitHub
        fontSize="large"
        style={{ color: theme.palette.secondary.light }}
        className={hover}
        onClick={() => window.open("https://github.com/agyin3")}
      />
      <Twitter
        fontSize="large"
        style={{ color: theme.palette.secondary.light }}
        className={hover}
        onClick={() => window.open("https://twitter.com/developer_buddy")}
      />
      <LinkedIn
        fontSize="large"
        style={{ color: theme.palette.secondary.light }}
        className={hover}
        onClick={() => window.open("https://linkedin.com/in/buddy-agyin")}
      />
      <Email
        fontSize="large"
        style={{ color: theme.palette.secondary.light }}
        className={hover}
        onClick={() => window.open("mailto:agyin3@gmail.com")}
      />
    </LinkContainer>
  );
};

export default FooterLinks;
