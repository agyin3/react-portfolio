import styled from 'styled-components'

export const HeaderContainer = styled.div`
    height: 12.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(48, 50, 61);
    padding: 0 2%;
    margin-bottom: 0;

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
        color: #F9C2DC;
        font-size: 2.5rem;
    }
`

export const Heading = styled.h1`
    font-size: 3rem;
    font-family: Lobster, cursive;
    color: #fff;

    &:hover {
        text-shadow: 0 0 20px #F9C2DC;
        cursor: pointer;
        font-size: 3.4rem;
    }

    @media (max-width: 500px) {
        display: none;
    }
`

export const FooterContainer = styled.div`
    background: #4D5061;
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
    height: 100vh;
    width: 100%;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 calc(100% - 5.5rem));

    @media (max-width: 800px) {
        height: 70vh;
    }
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
    background: #30323D;
    text-align: center;
    margin-top: 0;
    padding-bottom: 5%;
    font-size: 1rem;
    line-height: 1.2;
    min-height: 80vh;

    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 calc(100% - 5.5rem));

    @media (max-width: 800px) {
        padding: 5rem 0 8rem 0;
    }
`

export const ProjectsHeader = styled.h1`
    font-family: 'Raleway', sans-serif;
    line-height: 0.8;
    font-size: 3.6rem;
    color: #fff;
    margin: 0;
    padding: 5%;

    @media(max-width: 500px) {
        font-size: 3.2rem;
    } 
`
export const AboutMeContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding-bottom: 5.5rem;
    width: 100%;
    min-height: 80vh;
    font-family: 'Montserrat', sans-serif;
    clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 5.5rem), 0 100%);
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
    font-size: 2.8rem;
    line-height: 0.8;
    color: #F9C2DC;
    font-weight: bolder;

`

export const CurrentSection = styled.section`
    height: 30vh;
    background: #fafafa;
    color: #30343F;
    display: flex;
    justify-content: center;
    align-items: center; 
`

export const SkillsHeader = styled.h4`
    font-family: 'Montserrat', sans-serif; 
    font-size: 4.8rem;
    font-weight: bold;
    text-align: center;
    color: #30323D;
`

export const SkillsWarapper = styled.div`
    dispaly: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    min-height: 70vh;
    padding: 5% 0;
    clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 5.5rem), 0 100%);
`

export const SkillsSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    min-height: 60vh;
    justify-content: space-around;
    color: #30323D;

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
    color: #30323D;
    width: 33.33%;

    @media (max-width: 800px) {
        width: 100%;
        padding-top: 2%;
        padding-bottom: 2%;
    }
`

export const SkillsTitle = styled.h5`
    font-family: 'Montserrat', sans-serif; 
    font-size: 3.6rem;
    font-weight: bolder;
    color: #30323D;

    @media (max-width: 800px) {
        font-size: 4.2rem;
    }
`

export const AvatarImage = styled.img`
    height: 25rem;
`

export const CardWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

    @media (max-width: 800px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`

export const ProjectContainer = styled.div`
    width: 30%;
    height:25rem;
    background: url(${props => props.src || ''});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;

    @media (max-width: 800px) {
        width: 80%;
        margin-bottom: 2rem;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 5rem;
    justify-content: space-around;
    align-items: center;
    position: relative;
    bottom: -30rem;
    height: 100%;
    width: 100%;
    background: rgba(247,172,207,0.9);
    overflow: hidden:
`

export const CardLink = styled.a`
    font-size: 1.5rem;
    text-decoration: underline;

    &:hover {
        text-decoration: underline;
        color: #30323D;
    }
`

export const CardHeader = styled.h3`
    font-size: 2.8rem;
    color: #30323D;
    margin-bottom: -2rem;

    @media (min-width: 800px) and (max-width: 900px) {
        font-size: 2rem;
    }
`
export const CardSubHeader = styled.h4`
    fonct-size: 2.2rem;
    color: #30323D;

    @media (min-width: 800px) and (max-width: 900px) {
        font-size: 1.4rem;
    }
`

export const CardText = styled.p`
    font-size: 1.8rem;
    color: #30323D;

    @media (min-width: 800px) and (max-width: 900px) {
        font-size: 1.4rem;
    }
`