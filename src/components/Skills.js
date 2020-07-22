import React from 'react'
import HeadShake from 'react-reveal/HeadShake'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SkillsSection, SkillsDiv, SkillsTitle, SkillsHeader, SkillsWarapper } from '../styled-components'

const icons = [
    {name: 'html5', title: 'HTML'}, 
    {name: 'css3-alt', title: 'CSS'}, 
    {name: 'js-square', title: 'JavaScript'}, 
    {name: 'react', title: 'ReactJs'}, 
    {name: 'node-js', title: 'NodeJs'}
]

const Skills = () => {
    return(
        <SkillsWarapper>
            <SkillsHeader>Languages</SkillsHeader>
            <SkillsSection>
                {icons.map((icon,index) => {
                    return (
                        <SkillsDiv className={index < 2 ? 'border-right ' : 2 < index < 4 ? 'skills-bottom border-right' : 'skills-bottom'} key={index}>
                            <FontAwesomeIcon className='skills-icons' icon={['fab', icon.name]}/>
                            <SkillsTitle>{icon.title}</SkillsTitle>
                        </SkillsDiv>
                    
                )})}

            </SkillsSection>
        </SkillsWarapper>
    )
}

export default Skills