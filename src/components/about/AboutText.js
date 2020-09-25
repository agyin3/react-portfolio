import { Box, Fade, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PortfolioContext from "../../context/PortfolioContext";

const Heading = withStyles({
  root: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2.8rem",
    fontWeight: 700,
    color: "#ECF7FE",
  },
})(Typography);

const TextContainer = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "60%",
    justifyContent: "space-between",
    maxWidth: "90vw",
    "@media (min-width: 1000px)": {
      maxWidth: "55vw",
    },
  },
})(Box);

const Text = styled.span`
  font-weight: 400;
`;

const AboutText = () => {
  const textRef = useRef();
  const { scrollPos } = useContext(PortfolioContext);
  const [animPosition, setAnimPosition] = useState(0);

  useEffect(() => {
    const { offsetTop, clientHeight } = textRef.current;
    setAnimPosition(offsetTop - clientHeight);
  }, []);

  return (
    <Fade in={scrollPos >= animPosition} timeout={1000}>
      <TextContainer ref={textRef}>
        <Heading component="p">
          Location: <Text>Salt Lake City</Text>
        </Heading>
        <Heading component="p">
          Front End: <Text>React | Gatsby | HTML | CSS | Material UI</Text>
        </Heading>
        <Heading component="p">
          Back End: <Text>Node | Python | Postgres | MongoDb</Text>
        </Heading>
        <Heading component="p">
          Interests:{" "}
          <Text>
            Coffee | Lakers | Terrible Scary Movies | Abstract Art | Craft Beer
          </Text>
        </Heading>
        <Heading component="p">
          About Me:{" "}
          <Text>
            I am a Full Stack Engineer based in Salt Lake City, Utah. I really
            enjoy working with codebases utilizng both MERN & PERN tech stacks
            but my true passion lies in designing and creating database
            structures and custom APIs. I'm currently open and ready to join an
            awesome team of developers working on creating innovative solutions
            within the sports, social, environmental, and entertainment
            industries.
          </Text>
        </Heading>
      </TextContainer>
    </Fade>
  );
};

export default AboutText;
