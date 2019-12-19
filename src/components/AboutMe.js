import React from 'react'
import { 
    AboutMePhoto,
    AboutMeTopSection, 
    AboutMeText,
    AboutMeContainer, 
    AboutMeTextContainer, 
    AboutMeHeader, 
    AboutMeMiddleSection, 
    CurrentHeader 
} from '../styled-components'
import Current from './Current'
import Skills from './Skills'

const AboutMe = () => {
    return(
        <AboutMeContainer id='about-me'>
            <AboutMeTopSection>
                <AboutMePhoto />
                <AboutMeTextContainer>
                    <AboutMeHeader>Buddy Agyin</AboutMeHeader>
                    <AboutMeText>I am a software engineer based out of Salt Lake City, Utah. Currently I'm a student at Lambda School working towards completing their full stack program. I love doing projects involving software development, mobile app creation, front-end/back-end dev, database/server management, and graphic design.</AboutMeText>
                </AboutMeTextContainer>
            </AboutMeTopSection>
            <Current />
            <Skills />
        </AboutMeContainer>
    )
}

export default AboutMe