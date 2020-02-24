import React from 'react'
import Header from './Header'
import Particles from './Particles.js'
import Bounce from 'react-reveal/Bounce'
import { HomepageContainer, HomepageText, HomePageHeader } from '../styled-components'

const Homepage = () => {
    return(
        <>
            <Header />
            <HomepageContainer>
                <Particles />
                <HomePageHeader>
                    <HomepageText><Bounce top cascade>- Buddy Agyin -</Bounce></HomepageText> 
                    <HomepageText><Bounce top cascade>Software and Web <wbr /> Developer</Bounce></HomepageText>
                </HomePageHeader>
            </HomepageContainer>
        </>
    )
}

export default Homepage