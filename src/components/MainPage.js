import React from 'react'
import Homepage from './Homepage'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Footer from './Footer'
import Skills from './Skills';
import LoaderPage from './loading/LoaderPage'

const MainPage = ({isLoading, setIsLoading}) => {
    
    if(isLoading) {
    return (
        <>
            <LoaderPage />
        </>
    )
} return (
    <>
        <Homepage />
        <AboutMe />
        <Projects setIsLoading={setIsLoading} />
        <Skills />
        <Footer />
    </>
)}

export default MainPage