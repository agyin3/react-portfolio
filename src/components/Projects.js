import React from 'react'
import ProjectsList from './ProjectsList'
import { ProjectsContainer, ProjectsHeader } from '../styled-components'

const Projects = () => {
    return(
        <ProjectsContainer>
            <ProjectsHeader>
                Check Out Some Of My Recent Work
            </ProjectsHeader>
            <ProjectsList />
        </ProjectsContainer>
    )
}

export default Projects