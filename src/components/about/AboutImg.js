import { Fade } from "@material-ui/core";
import React, { memo, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PortfolioContext from "../../context/PortfolioContext";
import buddy1 from "../../img/buddy-1.jpg";
import buddy2 from "../../img/buddy-2.jpg";

const Image = styled.span`
  width: 35vw;
  height: 35vw;
  border-radius: 100%;
  background-image: ${(props) => `url(${props.image})` || null};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-image 1s, transform 1s;

  @media (min-width: 1000px) {
    &:hover {
      background-image: ${(props) => `url(${props.hoverImage})` || null};
    }
  }
`;

const AboutImg = memo(() => {
  const imageRef = useRef();
  const { scrollPos } = useContext(PortfolioContext);
  const [animPosition, setAnimPosition] = useState();

  useEffect(() => {
    const { offsetTop, clientHeight } = imageRef.current;
    setAnimPosition(offsetTop - clientHeight);
  }, []);

  return (
    <Fade in={scrollPos > animPosition} timeout={1000}>
      <Image ref={imageRef} image={buddy1} hoverImage={buddy2} />
    </Fade>
  );
});

export default AboutImg;
