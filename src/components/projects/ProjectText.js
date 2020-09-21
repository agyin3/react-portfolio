import { Box, Link, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import React from 'react'

const Description = withStyles({
    root: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: '2.8rem',
        color: '#ECF7FE'
    }
})(Typography)

const ProjLink = withStyles({
    root: {
        margin: 'auto 1rem',
        color: "#CCA43B",
        fontSize: '2.4rem',
        textDecoration: 'underline',
        fontWeight: 700,

        '&:hover': {
            fontWeight: 700,
            color: '#FFBA0A'
        }
    }
})(Link)

const TextContainer = withStyles({
    root: {
        width: '60%'
    }
})(Box)

const ProjectText = ({name, languages, description, url, github}) => (
    <TextContainer>
        <Typography component='p' variant='h2'>{name}</Typography>
        {languages.map((lang, idx) => <Typography component='p' variant='h3' key={lang + Math.random() * 1000}>{idx === languages.length - 1 ? lang : `${lang} |`}</Typography>)}
        <Description component='p'>{description}</Description>
        <ProjLink href={url} style={{marginLeft: '0'}}>Deployed</ProjLink>
        <ProjLink href={github}>Github</ProjLink>
    </TextContainer>
)

export default ProjectText