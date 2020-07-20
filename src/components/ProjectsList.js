import React from 'react'
import Fade from 'react-reveal/Fade'
import { Card, Image, Icon } from 'semantic-ui-react'
import projects from '../projects'
import { ProjectContainer, CardWrapper } from '../styled-components'
import ProjectCard from './ProjectCard'

const ProjectsList = () => {
    return(
        <>
        <Fade bottom cascade>
        <CardWrapper>
                {projects.map(project => {
                return <ProjectCard img={project.img} {...project} />
                })}
        </CardWrapper>
        </Fade>
        </>
    )
}

export default ProjectsList