import React from 'react'
import ProjectsList from './ProjectsList'
import { ProjectsContainer, ProjectsHeader, NavLinks } from '../styled-components'

const Projects = ({setIsLoading}) => {
    return(
            <ProjectsContainer id='projects'>
                <ProjectsHeader>
                    Check Out Some Of <wbr/> My Recent Work
                </ProjectsHeader>
                <ProjectsList setIsLoading={setIsLoading} />
            </ProjectsContainer>
    )
}

export default Projects