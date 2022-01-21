import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import theme from "../../styles/theme";
import FooterLinks from "./FooterLinks";

const FooterContainer = withStyles({
    root: {
        minHeight: "10vh",
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        background: theme.palette.primary.light,
        padding: "2rem",

        "@media (min-width: 1000px)": {
            flexDirection: "row",
            padding: "2rem",
        },
    },
})(({ classes, children }) => (
    <footer id="contact" className={classes.root}>
        {children}
    </footer>
));

const Footer = () => {
    return (
        <FooterContainer>
            <Typography color="secondary" style={{ fontSize: "2.5rem" }}>
                &#169; 2020 Buddy Agyin
            </Typography>
            <FooterLinks />
        </FooterContainer>
    );
};

export default Footer;
