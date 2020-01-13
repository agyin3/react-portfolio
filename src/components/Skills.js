import React from 'react'
import HeadShake from 'react-reveal/HeadShake'
import { SkillsSection, SkillsDiv, SkillsTitle } from '../styled-components'

const Skills = () => {
    return(
        <HeadShake>
        <SkillsSection>
            <SkillsDiv>
            <SkillsTitle><span class="skills-number">01.</span> Student</SkillsTitle>
            <p class="skills-text">Before anything else, I consider myself a student of software engineering. I'm always looking for resources that will push my skills and knowledge base to the next level.</p>
            </SkillsDiv>
            <SkillsDiv>
            <SkillsTitle><span class="skills-number">02.</span> Languages</SkillsTitle>
            <p class="skills-text">I am proficient in the following languages and frameworks: HTML, CSS, LESS, Javascript, JQuery, and ReactJS. I plan on learning the following: Java, Python, VueJS, and AngularJS.</p>
            </SkillsDiv>
            <SkillsDiv>
            <SkillsTitle><span class="skills-number">03.</span> Approach</SkillsTitle>
            <p class="skills-text">When working on projects, I like to take a user-first approcah, ensuring that the end user will have a smooth and enjoyable time utilizing the website/app.</p>
            </SkillsDiv>
        </SkillsSection>
        </HeadShake>
    )
}

export default Skills