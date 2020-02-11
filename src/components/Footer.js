import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navigation, NavLinks, FooterContainer, Copyright } from '../styled-components'

const Footer = () => {
    return(
        <FooterContainer>
            <Copyright>&copy; 2019 Buddy Agyin</Copyright>
            <Navigation>
                <NavLinks href='http://github.com/agyin3' target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'github']} size='s'/>
                </NavLinks>
                <NavLinks href='https://linkedin.com/in/buddy-agyin' target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} size='s'/>
                </NavLinks>
                <NavLinks href='https://twitter.com/developer_buddy' target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'twitter']} size='s'/>
                </NavLinks>
                <NavLinks href='https://instagram.com/justsomebuddy_' target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'instagram']} size='s'/>
                </NavLinks>
            </Navigation>
        </FooterContainer>
    )
}

export default Footer