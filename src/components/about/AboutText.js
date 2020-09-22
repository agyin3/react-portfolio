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
    height: "60%",
    justifyContent: "space-between",
    maxWidth: "55vw",
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
          Interests: <Text>Coffee | Lakers | Terrible Scary Movies</Text>
        </Heading>
        <Heading component="p">
          About Me:{" "}
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            morbi non arcu risus quis varius quam. Porttitor leo a diam
            sollicitudin tempor id eu nisl.
          </Text>
        </Heading>
      </TextContainer>
    </Fade>
  );
};

export default AboutText;
