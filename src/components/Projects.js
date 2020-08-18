import React from 'react'
import Flip from 'react-reveal/Flip'
import ProjectsList from './ProjectsList'
import { ProjectsContainer, ProjectsHeader, NavLinks } from '../styled-components'

const Projects = ({setIsLoading}) => {
    return(
            <ProjectsContainer id='projects'>
                <ProjectsHeader>
                    Check Out Some Of <wbr/> My Recent Work
                </ProjectsHeader>
                <ProjectsList setIsLoading={setIsLoading} />
                <NavLinks>View More Projects</NavLinks>
            </ProjectsContainer>
    )
}

export default Projects