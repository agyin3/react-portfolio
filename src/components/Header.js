import React from 'react';
import { HeaderContainer, Navigation, NavLinks, Heading } from '../styled-components'

const Header = () => {
    return (
        <HeaderContainer>
            <NavLinks href='#'>
                <Heading>Buddy Agyin</Heading>
            </NavLinks>
            <Navigation>
                <NavLinks href='#'>Home</NavLinks>
                <NavLinks href='#'>Projects</NavLinks>
                <NavLinks href='#'>About</NavLinks>
                <NavLinks href='#'>Contact</NavLinks>
            </Navigation>
        </HeaderContainer>
    )
}

export default Header