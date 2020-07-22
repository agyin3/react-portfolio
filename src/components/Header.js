import React from 'react';
import { HeaderContainer, Navigation, NavLinks, Heading } from '../styled-components'

const Header = () => {

    return (
        <HeaderContainer>
            <Heading>Buddy Agyin</Heading>
            <Navigation margin='1.6rem 0'>
                <NavLinks href='#projects'>Projects</NavLinks>
                <NavLinks href='#about-me'>About</NavLinks>
                <NavLinks href='https://buddyagyin.blog' target='_blank'>Blog</NavLinks>
            </Navigation>
        </HeaderContainer>
    )
}

export default Header