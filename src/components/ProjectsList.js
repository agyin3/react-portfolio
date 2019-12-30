import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import projects from '../projects'

const ProjectsList = () => {
    return(
        <div className='card-container'>
            <Card.Group stackable itemsPerRow={2}>
                {projects.map(project => {
                return <Card key={project.id}>
                        <Image src={project.img} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>
                                {project.title}
                            </Card.Header>
                            <Card.Meta>
                                {project.languages.map(language => {
                                    return language + ' '
                                })}
                            </Card.Meta>
                            <Card.Description>
                                {project.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a className='project-link' href={project.url}>
                                <Icon name='globe' />
                                View Project
                            </a>
                            <a className='project-link' href={project.github}>
                                <Icon name='github' />
                                View Github
                            </a>
                        </Card.Content>
                    </Card>
                })}
            </Card.Group>
        </div>
    )
}

export default ProjectsList