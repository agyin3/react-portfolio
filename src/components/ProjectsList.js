import React, { useState, useEffect } from 'react'
import { CardWrapper } from '../styled-components'

import ProjectCard from './ProjectCard'
import axios from 'axios'

const ProjectsList = () => {
    const [projects, setProjects] = useState([])

    const fetchProjects = async () => {
        try {
            const projectList = await axios.get(`${process.env.REACT_APP_BASE_DB_URL}/projects`)

            // Only need to set favorite projects to state here
            const favorites = await projectList.data.projects
                                .filter(proj => proj.favorite)
                                // Need to split up string into an array 
                                // In order to map over them in ProjectCard component
                                .map(proj => {
                                    return {...proj, languages: proj.languages.split(',')}
                                })
            setProjects(favorites)
        }catch(err){
            console.log('You fucked up!!', err.message)
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])
    
    return(
        <CardWrapper>
                {projects?.map(project => {
                return <ProjectCard key={project.id} image={project.image} {...project} />
                })}
        </CardWrapper>
    )
}

export default ProjectsList