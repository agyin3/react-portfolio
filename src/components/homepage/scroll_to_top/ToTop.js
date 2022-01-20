import { Fab, useScrollTrigger, Zoom } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { animateScroll } from "react-scroll";

const ScrollButton = withStyles({
    root: {
        position: "fixed",
        bottom: "12vh",
        right: "2rem",
    },
})(({ classes, children, ...rest }) => (
    <div role="presentation" className={classes.root} {...rest}>
        {children}
    </div>
));

const ToTop = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: window.innerHeight,
    });

    return (
        <Zoom in={trigger}>
            <ScrollButton onClick={animateScroll.scrollToTop}>
                <Fab color="secondary" size="small">
                    <KeyboardArrowUp />
                </Fab>
            </ScrollButton>
        </Zoom>
    );
};

export default ToTop;
