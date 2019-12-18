import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navigation, NavLinks, FooterContainer, Copyright } from '../styled-components'

const Footer = () => {
    return(
        <FooterContainer>
            <Copyright>&copy; 2019 Buddy Agyin</Copyright>
            <Navigation>
                <NavLinks>
                    <FontAwesomeIcon icon={['fab', 'github']} size='s'/>
                </NavLinks>
                <NavLinks>
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} size='s'/>
                </NavLinks>
                <NavLinks>
                    <FontAwesomeIcon icon={['fab', 'twitter']} size='s'/>
                </NavLinks>
                <NavLinks>
                    <FontAwesomeIcon icon={['fab', 'instagram']} size='s'/>
                </NavLinks>
                <NavLinks>
                    <FontAwesomeIcon icon={['fab', 'codepen']} size='s'/>
                </NavLinks>
            </Navigation>
        </FooterContainer>
    )
}

export default Footer