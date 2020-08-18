import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { CardWrapper } from '../styled-components'

import ProjectCard from './ProjectCard'
import axios from 'axios'

const ProjectsList = ( {setIsLoading} ) => {
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
        setIsLoading(true)
        fetchProjects()
        setIsLoading(false)
    }, [])
    
    return(
        <>
        <Fade bottom cascade>
        <CardWrapper>
                {projects?.map(project => {
                return <ProjectCard key={project.id} image={project.image} {...project} />
                })}
        </CardWrapper>
        </Fade>
        </>
    )
}

export default ProjectsList