import React from 'react'
import Header from './Header'
import Bounce from 'react-reveal/Bounce'
import { HomepageContainer, HomepageText, HomePageHeader, HomepagePhoto } from '../styled-components'
import image from '../img/hero-img.jpg'

const Homepage = () => {
    return(
        <>
            <Header />
            <HomepageContainer>
                <HomepagePhoto role='img' image={image} aria-label='Santa Monica Pier'>
                <HomePageHeader>
                    <HomepageText><Bounce top cascade>- Buddy Agyin -</Bounce></HomepageText> 
                    <HomepageText><Bounce top cascade>Software and Web</Bounce></HomepageText>
                    <HomepageText><Bounce top cascade>Developer</Bounce></HomepageText>
                </HomePageHeader>
                </HomepagePhoto>
            </HomepageContainer>
        </>
    )
}

export default Homepage