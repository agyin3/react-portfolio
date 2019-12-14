import React from 'react'
import Header from './Header'
import { HomepageContainer, HomepageHeading, HomepageText } from '../styled-components'

const Homepage = () => {
    return(

        <HomepageContainer>
            <Header />
            <HomepageText>Utah based <br/> front-end developer</HomepageText>
        </HomepageContainer>
    )
}

export default Homepage