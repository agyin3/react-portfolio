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
                    "I have experience working on cross-functinoal teams, meeting deadlines, and utilizing agile development principles",
                    "I'm currently looking for my next opportunity and would love to get in contact with you"
                ]}
                speed={85}
                typingDelay={250}
            />
        </AboutMeContainer>
    )
}

export default AboutMe