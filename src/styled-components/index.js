import styled from 'styled-components'

export const HeaderContainer = styled.div`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #413C58;
    padding: 0 2%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    opacity: 0.9;

    @media (max-width: 800px) {
        flex-direction: column;
    }

    @media (max-width: 500px) {
        justify-content: center;
        padding: 0 0;
    }

    @media (max-height: 500px) {
        height: auto;
    }
`

export const Navigation = styled.ul`
    display: flex;
    width: 40%;
    justify-content: space-around;
    align-items: center;
    font-family: Raleway, sans-serif;

    @media (max-width: 800px) {
        width: 80%;
        padding: 0;
    }
`

export const NavLinks = styled.a`
    text-decoration: none;
    font-size: 2.2rem;
    color: #fff;

    &:hover {
        color: #EFD0CA;
        font-size: 2.5rem;
    }
`

export const Heading = styled.h1`
    font-size: 3rem;
    font-family: Lobster, cursive;
    color: #fff;

    &:hover {
        text-shadow: 0 0 20px #EFD0CA;
        cursor: pointer;
        font-size: 3.4rem;
    }

    @media (max-width: 500px) {
        display: none;
    }
`

export const FooterContainer = styled.div`
    background: #1FA1F2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2%;
    padding-right: 2%;
    height: 10vh;

    @media (max-width: 800px) {
        flex-direction: column-reverse;
    }

    @media (max-height: 500px) {
        height: auto;
    }

`

export const Copyright = styled.p`
    font-family: Raleway, sans-serif;
    color: #fff;
    font-size: 2rem;
    margin-bottom: 0;
`

export const HomepageContainer = styled.div`
    padding:0;
    margin:0;
    height: 100vh;
    width: 100%;
`

export const HomePageHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
`

export const HomepageText = styled.h1`
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-size: 4.4rem;
    text-shadow: 0 0 40px #000;
    text-align: center;
    align-self: center;
    margin: 0;

    @media(max-width: 500px) {
        font-size: 3.4rem;
    } 
`

export const ProjectsContainer = styled.div`
    background: #413C58;
    text-align: center;
    margin-top: 0;
    padding-bottom: 5%;
    font-size: 1rem;
    line-height: 1.2;
`

export const ProjectsHeader = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-size: 3.6rem;
    color: #fff;
    margin: 0;
    padding: 5%;

    @media(max-width: 500px) {
        font-size: 3.2rem;
    } 
`
export const AboutMeContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
`

export const AboutMeTopSection = styled.section`
    display: flex;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export const AboutMePhoto = styled.div`
    height: 100vh;
    width: 50%;
    background: url(https://github.com/agyin3/images/blob/master/portfolio/IMG_0224.JPG?raw=true);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 800px) {
        width: 100%;
    }
`

export const AboutMeTextContainer = styled.div`
    height: 100vh;
    width: 50%;
    background: #30343F;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 5%;
    padding-right: 5%;

    @media (max-width: 800px) {
        width: 100%;
    }
`

export const AboutMeHeader = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-size: 4.8rem;
`

export const AboutMeText = styled.p`
    font-family: 'Montserrat', sans-serif; 
    font-size: 2.1rem;
    text-align: justify;

`

export const CurrentSection = styled.section`
    height: 30vh;
    background: #fafafa;
    color: #30343F;
    display: flex;
    justify-content: center;
    align-items: center; 
`

export const CurrentHeader = styled.h4`
    font-family: 'Montserrat', sans-serif; 
    font-size: 10.8rem;
    font-weight: bold;
`

export const SkillsSection = styled.section`
    display: flex;
    justify-content: center;
    background: #fff;
    height: 60vh;

    @media (max-width: 800px){
        flex-direction: column
        height: auto;
    }
`

export const SkillsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    color: #30343F;

    &:hover {
        background: #f2f2f2;
    }

    @media (max-width: 800px) {
        width: 100%;
        padding-top: 2%;
        padding-bottom: 2%;
    }
`

export const SkillsTitle = styled.h5`
    font-family: 'Montserrat', sans-serif; 
    font-size: 4.8rem;
    font-weight: bolder;

    @media (max-width: 800px) {
        font-size: 4.2rem;
    }
`