import React from 'react'
import ProjectsList from './ProjectsList'
import { ProjectsContainer, ProjectsHeader, NavLinks } from '../styled-components'

const Projects = () => {
    return(
            <ProjectsContainer id='projects'>
                <ProjectsHeader>
                    Check Out Some Of <wbr/> My Recent Work
                </ProjectsHeader>
                <ProjectsList />
            </ProjectsContainer>
    )
}

export default Projects