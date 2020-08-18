import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SkillsSection, SkillsDiv, SkillsTitle, SkillsHeader, SkillsWarapper } from '../styled-components'

const icons = [ 
    {type: 'fab', name: 'react', title: 'ReactJs'}, 
    {type: 'fab', name: 'node-js', title: 'NodeJs'},
    {type: 'fab', name: 'python', title: 'Python'},
    // {type: 'fas', name: 'code', title: 'Postgres'},
    {type: 'fab', name: 'js-square', title: 'JavaScript'},
    // {type: 'fab', name: 'github-square', title: 'Github'},
    {type: 'fab', name: 'html5', title: 'HTML'}, 
    // {type: 'fab', name: 'css3-alt', title: 'CSS'},

]

const Skills = () => {
    return(
        <SkillsWarapper>
            <SkillsHeader>Languages</SkillsHeader>
            <SkillsSection>
                {icons.map((icon,index) => {
                    return (
                        <SkillsDiv className={index < 2 ? 'border-right ' : 2 < index < 4 ? 'skills-bottom border-right' : 'skills-bottom'} key={index}>
                            <FontAwesomeIcon aria-label={`${icon.title} icon`} className='skills-icons' icon={[icon.type, icon.name]}/>
                            <SkillsTitle>{icon.title}</SkillsTitle>
                        </SkillsDiv>
                    
                )})}

            </SkillsSection>
        </SkillsWarapper>
    )
}

export default Skills