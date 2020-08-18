import React from 'react'
import { 
    AboutMeText,
    AboutMeContainer, 
    AvatarImage
} from '../styled-components'
import avatar from '../img/Avatar-Maker.png'
import TypingEffect from 'react-typing-effect'

const AboutMe = () => {
    return(
        <AboutMeContainer id='about-me'>
            <AvatarImage src={avatar} alt='Fun Cartoon Avatar representation of Buddy Agyin'/>
            <AboutMeText>Hi There!</AboutMeText>
            <TypingEffect 
                className='about-me-text'
                text={[
                    "My name is Buddy Agyin. I am a Full Stack Developer based in Salt Lake City.", 
                    "I love working with Web technologies to build sites and apps.",
                    "If you're looking for someone to help build your next great project, I'm your guy."
                ]}
                speed={125}
                typingDelay={1500}
            />
        </AboutMeContainer>
    )
}

export default AboutMe