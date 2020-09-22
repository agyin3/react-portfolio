import { Box, Slide } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useContext, useEffect, useRef, useState } from "react";
import PortfolioContext from "../../context/PortfolioContext";
import { ProjectImage } from "./ProjectImg";
import ProjectText from "./ProjectText";

const ProjectContainer = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10% 1rem",
    width: "90%",
    margin: "0 auto",
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
    <Slide
      direction={idx === 0 ? "up" : "right"}
      in={scrollPos >= animPosition}
      timeout={1000}
    >
      <ProjectContainer ref={projectRef}>
        <ProjectImage src={proj.image} />
        <ProjectText {...proj} />
      </ProjectContainer>
    </Slide>
  );
};

export default Project;
