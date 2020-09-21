import React from 'react'
import styled from 'styled-components'

const Img = styled.span`
    height: 50vh;
    width: 100%;
    box-shadow: ${props => `inset 0 0 0 100vw ${props.bgColor}` || "#1B262C"}; 
    background-image: ${props => `url("${props.mobileImage}")` || null};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: ${props => `inset 0 0 0 100vw ${props.hoverColor}` || "#1B262C"}; 
    }
    
    @media (min-width: 800px) {
        height: 100vh;
        width: 50%;
        background-image: ${props => `url("${props.desktopImage}")` || null};
    }
`

const HeroImg = ({ children, ...rest }) => (
    <Img {...rest}>
        { children }
    </Img>
)
export default HeroImg