import React from 'react'
import Flip from 'react-reveal/Flip'
import ProjectsList from './ProjectsList'
import { ProjectsContainer, ProjectsHeader } from '../styled-components'

const Projects = () => {
    return(
        <ProjectsContainer id='projects'>
            <ProjectsHeader>
                <Flip left cascade>Check Out Some Of My <wbr/> Recent Work</Flip>
            </ProjectsHeader>
            <ProjectsList />
        </ProjectsContainer>
    )
}

export default Projects