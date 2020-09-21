import React from 'react'
import Header from '../header/Header'
import Projects from '../projects/Projects'
import Landing from './landing/Landing'

const Homepage = () => {
    return (
        <div>
            <Header />
            <Landing />
            <Projects />
        </div>
    )
}

export default Homepage