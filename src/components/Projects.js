import React from 'react'
import Flip from 'react-reveal/Flip'
import ProjectsList from './ProjectsList'
import { ProjectsContainer, ProjectsHeader } from '../styled-components'

const Projects = ({setIsLoading}) => {
    return(
            <ProjectsContainer id='projects'>
                <ProjectsHeader>
                    <Flip left cascade>Check Out Some Of <wbr/> My Recent Work</Flip>
                </ProjectsHeader>
                <ProjectsList setIsLoading={setIsLoading} />
            </ProjectsContainer>
    )
}

export default Projects