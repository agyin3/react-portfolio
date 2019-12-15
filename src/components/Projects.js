import React from 'react'
import ProjectsList from './ProjectsList'
import { ProjectsContainer, ProjectsHeader } from '../styled-components'

const Projects = () => {
    return(
        <ProjectsContainer>
            <ProjectsHeader>
                Recent Projects
            </ProjectsHeader>
            <ProjectsList />
        </ProjectsContainer>
    )
}

export default Projects