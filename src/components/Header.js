import React from 'react';
import { HeaderContainer, Navigation, NavLinks, Heading } from '../styled-components'

const Header = () => {

    return (
        <HeaderContainer>
            <Heading>Buddy Agyin</Heading>
            <Navigation margin='1.6rem 0'>
                <NavLinks href='#projects' rel='noreferrer' aria-label='Projects'>Projects</NavLinks>
                <NavLinks href='#about-me' rel='noreferrer' aria-label='About'>About</NavLinks>
                <NavLinks href='https://buddyagyin.blog' rel='noreferrer' target='_blank' aria-label='Blog'>Blog</NavLinks>
            </Navigation>
        </HeaderContainer>
    )
}

export default Header