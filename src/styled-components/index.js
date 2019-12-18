import styled from 'styled-components'

export const HeaderContainer = styled.div`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #413C58;
    padding: 0 2%;
`

export const Navigation = styled.ul`
    display: flex;
    width: 40%;
    justify-content: space-around;
    align-items: center;
    font-family: Raleway, sans-serif;
`

export const NavLinks = styled.a`
    text-decoration: none;
    font-size: 1.4rem;
    color: #fff;

    &:hover {
        color: #EFD0CA;
        font-size: 1.6rem;
    }
`

export const Heading = styled.h1`
    font-size: 2rem;
    font-family: Lobster, cursive;
    color: #fff;

    &:hover {
        text-shadow: 0 0 20px #EFD0CA;
        cursor: pointer;
        font-size: 2.2rem;
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

`

export const Copyright = styled.p`
    font-family: Raleway, sans-serif;
    color: #fff;
    font-size: 1.3rem;
    margin-bottom: 0;
`

export const HomepageContainer = styled.div`
    padding:0;
    margin:0;
    background: url(https://github.com/agyin3/images/blob/master/portfolio/portfolio-bg.jpg?raw=true) no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    width: 100%;
`

export const HomePageHeader = styled.div`
    display: flex;
    justify-content: center;
    height: 80%;
`

export const HomepageText = styled.h1`
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-size: 3.6rem;
    text-shadow: 0 0 40px #000;
    text-align: center;
    align-self: center;
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
    font-size: 3rem;
    color: #fff;
    margin: 0;
    padding: 5%;
`
export const AboutMeContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
`

export const AboutMeTopSection = styled.section`
    display: flex;
`

export const AboutMePhoto = styled.div`
    height: 100vh;
    width: 50%;
    background: url(https://github.com/agyin3/images/blob/master/portfolio/IMG_0224.JPG?raw=true);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
`

export const AboutMeHeader = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-size: 3.5rem;
`

export const AboutMeText = styled.p`
    font-family: 'Montserrat', sans-serif; 
    font-size: 1.5rem;
    text-align: justify;

`

export const AboutMeMiddleSection = styled.section`
    height: 30vh;
    background: #fafafa;
    color: #30343F;
    display: flex;
    justify-content: center;
    align-items: center; 
`

export const CurrentHeader = styled.h4`
    font-family: 'Montserrat', sans-serif; 
    font-size: 7.75rem;
    font-weight: bold;
`