import React, { useState } from 'react'
import { ProjectContainer, CardContainer, CardLink, CardHeader, CardSubHeader, CardText } from '../styled-components'

const ProjectCard = ({img, title, languages, description, url, github}) => {
    const [animate, setAnimate] = useState('')
    const hover = visible => {
        setAnimate(visible)
    }
    return(
        <ProjectContainer 
        src={img}
        onClick={() => hover(true)}
        >
            <CardContainer 
            className={animate ? 'slide-in' : animate === '' ? '' : 'slide-out'}
            onMouseLeave={() => hover(false)}
            >
                <div>
                    <CardHeader>{title}</CardHeader>
                    <CardSubHeader>{languages.map(lang => `${lang} `)}</CardSubHeader>
                </div>
                <CardText>{description}</CardText>
                <CardLink href={url} target='_blank'>View Project</CardLink>
                <CardLink href={github} target='_blank'>Github</CardLink>
            </CardContainer>
        </ProjectContainer>
    )
}

export default ProjectCard