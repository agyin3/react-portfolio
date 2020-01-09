import React from 'react';
import { HeaderContainer, Navigation, NavLinks, Heading } from '../styled-components'

const Header = () => {

    return (
        <HeaderContainer>
            <Heading>Buddy Agyin</Heading>
            <Navigation>
                <NavLinks href='#projects'>Projects</NavLinks>
                <NavLinks href='#about-me'>About</NavLinks>
                <NavLinks href='#'>Contact</NavLinks>
            </Navigation>
        </HeaderContainer>
    )
}

export default Header