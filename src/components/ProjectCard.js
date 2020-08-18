import React, { useState } from 'react'
import { ProjectContainer, ProjectImage, CardContainer, CardLink, CardHeader, CardSubHeader, CardText } from '../styled-components'

const ProjectCard = ({image, name, languages, description, url, github}) => {
    const [animate, setAnimate] = useState('')
    const hover = visible => {
        setAnimate(visible)
    }
    return(
        <ProjectContainer>
            <ProjectImage 
            role='img'
            aria-label={`Screenshot of ${name} homepage`} 
            src={image}
            onMouseEnter={() => hover(true)}
            onMouseLeave={() => hover(false)}
             >
            <CardContainer 
            className={`project-card ${animate ? 'slide-in' : animate === '' ? '' : 'slide-out'}`}
            >
                <div>
                    <CardHeader>{name}</CardHeader>
                    <CardSubHeader>{languages.map(lang => `${lang} `)}</CardSubHeader>
                </div>
                <CardText>{description}</CardText>
                <CardLink href={url} target='_blank'>View Project</CardLink>
                <CardLink href={github} target='_blank'>Github</CardLink>
            </CardContainer>
            </ProjectImage>
        </ProjectContainer>
    )
}

export default ProjectCard