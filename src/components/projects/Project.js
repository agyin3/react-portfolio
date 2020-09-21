import { Box } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import React from 'react'
import { ProjectImage } from './ProjectImg'
import ProjectText from './ProjectText'

const ProjectContainer = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10% 1rem',
        width: '90%',
        margin: '0 auto'
    }
})(Box)

const Project = ({ proj }) => {
    console.log(proj)
    return(
        <ProjectContainer>
            <ProjectImage src={proj.image} />
            <ProjectText {...proj} />
        </ProjectContainer>
    )
}

export default Project