import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useContext, useEffect, useRef, useState } from "react";
import PortfolioContext from "../../context/PortfolioContext";
import { ProjectImage } from "./ProjectImg";
import ProjectText from "./ProjectText";

const ProjectContainer = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10% 1rem",
        width: "90%",
        margin: "0 auto",
        opacity: 0,
        transform: "translate(0px, -50px)",
        "@media (min-width: 1000px)": {
            flexDirection: "row",
        },
    },
})(Box);

const Project = ({ proj, idx }) => {
    const projectRef = useRef();
    const { scrollPos } = useContext(PortfolioContext);
    const [animPosition, setAnimPosition] = useState(0);

    useEffect(() => {
        const { offsetTop, clientHeight } = projectRef.current;
        setAnimPosition(offsetTop - clientHeight);
    }, []);

    return (
        <ProjectContainer
            ref={projectRef}
            style={{
                opacity: animPosition <= scrollPos ? 1 : 0,
                transitionDuration: "1s",
                transform: animPosition <= scrollPos && "translate(0px, 0px)",
            }}
        >
            <ProjectImage src={proj.image} />
            <ProjectText {...proj} />
        </ProjectContainer>
    );
};

export default Project;
