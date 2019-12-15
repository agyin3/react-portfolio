import React from 'react'
import Header from './Header'
import { HomepageContainer, HomepageHeading, HomepageText, HomePageHeader } from '../styled-components'

const Homepage = () => {
    return(

        <HomepageContainer>
            <Header />
            <HomePageHeader>
                <HomepageText>Utah based <br/> front-end developer</HomepageText>
            </HomePageHeader>
        </HomepageContainer>
    )
}

export default Homepage