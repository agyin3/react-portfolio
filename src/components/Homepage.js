import React from 'react'
import Header from './Header'
import Particles from './Particles.js'
import Bounce from 'react-reveal/Bounce'
import { HomepageContainer, HomepageHeading, HomepageText, HomePageHeader } from '../styled-components'

const Homepage = () => {
    return(
        <>
            <Header />
            <HomepageContainer>
                <Particles />
                <HomePageHeader>
                    <HomepageText><Bounce top cascade>Utah based</Bounce></HomepageText> 
                    <HomepageText><Bounce top cascade>front-end developer</Bounce></HomepageText>
                </HomePageHeader>
            </HomepageContainer>
        </>
    )
}

export default Homepage