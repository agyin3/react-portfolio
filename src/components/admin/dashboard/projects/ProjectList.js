import React, { useState, useEffect } from 'react'
import { SimpleContainer, Heading } from '../../../../styled-components'
import projectsData from '../../../../projects'
import ProjectCard from './ProjectCard'
import API from '../../../../utils/API'


const ProjectList = () => {
    const [projects, setProjects] = useState()

    const fetchProjects = async () => {
        try {
            
            const res = await API.get('/projects')
            setProjects(res.data.projects.sort((a, b) => a.id - b.id))

        }catch(err){
            console.log('There was an error', err.response)
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <SimpleContainer
        width='80%'
        height='100vh'
        direction='column'
        justify='space-between'
        overflow='hidden'
        >
            <Heading
            size='6.4rem'
            color='#000'
            hoverSize='6.4rem'
            >
                Project List
            </Heading>
            <SimpleContainer 
            justify='flex-start' 
            direction='column' 
            overflow='scroll' 
            height='200vh'
            >
            {projects?.map(project => (
                <ProjectCard project={project} fetchProjects={fetchProjects} />
            ))}
            </SimpleContainer>
        </SimpleContainer>
    )
}

export default ProjectList