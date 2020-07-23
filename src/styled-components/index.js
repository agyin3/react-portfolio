import styled from 'styled-components'

const tan = '#faf4dd'
const pink = '#f7accf'
const accentPink = '#F9C2DC'
const darkBlue = '#30323d'
const grey = '#4d5061'
const white = '#fff'
const black = '#000'
const lightBlue = '#5c80bc'

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
    margin: ${props => props.margin ? props.margin : 'auto'}

    @media (max-width: 800px) {
        width: 80%;
        padding: 0;
    }
`

export const NavLinks = styled.a`
    text-decoration: none;
    font-size: ${props => props.size ? props.size : '2.2rem'};
    color: ${white};

    &:hover {
        cursor: pointer;
        color: ${accentPink};
        font-size: ${props => props.hoverSize ? props.hoverSize : '2.5rem'};
    }
`

export const Heading = styled.h1`
    font-size: ${props => props.size ? props.size : '3rem'};
    font-family: Lobster, cursive;
    color: ${props => props.color ? props.color : `${white}`};
    text-align: ${props => props.align ? props.align : 'initial'};
    margin: ${props => props.margin ? props.margin : '0 0 10px'}

    &:hover {
        text-shadow: 0 0 20px ${accentPink};
        cursor: pointer;
        font-size: ${props => props.hoverSize ? props.hoverSize : '3.4rem'};
    }

    @media (max-width: 500px) {
        display: none;
    }
`

export const FooterContainer = styled.div`
    background: ${grey};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 2%;
    min-height: 10vh;

    @media (max-width: 800px) {
        flex-direction: column-reverse;
    }

    @media (max-height: 500px) {
        height: auto;
    }

`

export const Copyright = styled.p`
    font-family: Raleway, sans-serif;
    color: ${white};
    font-size: 2rem;
    margin: 0;
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
    color: ${white};
    font-family: 'Raleway', sans-serif;
    font-size: 4.4rem;
    text-shadow: 0 0 40px ${black};
    text-align: center;
    align-self: center;
    margin: 0;

    @media(max-width: 500px) {
        font-size: 3.4rem;
    } 
`

export const ProjectsContainer = styled.div`
    background: ${darkBlue};
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
    color: ${white};
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
    background: ${white};
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
    color: ${white};
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
    color: ${accentPink};
    font-weight: bolder;
    margin: 0 0 2.8rem;

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
    color: ${darkBlue};
    margin: 0 0 calc(2rem - 0.142857em);
`

export const SkillsWarapper = styled.div`
    dispaly: flex;
    flex-direction: column;
    justify-content: center;
    background: ${white};
    min-height: 70vh;
    padding: 5% 0;
    clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 5.5rem), 0 100%);
`

export const SkillsSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    min-height: 60vh;
    justify-content: space-around;
    color: ${darkBlue};

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
    color: ${darkBlue};
    width: 33%;

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
    color: ${darkBlue};
    margin: calc(2rem - 0.142857em) 0 0;

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

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 800px) {
        width: 80%;
        margin-bottom: 2rem;
    }
`

export const CardContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem;
    justify-content: space-around;
    align-items: center;
    position: relative;
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
        color: ${darkBlue};
    }
`

export const CardHeader = styled.h3`
    font-size: 2.8rem;
    color: ${darkBlue};
    margin: 0 0 1rem;

    @media (min-width: 800px) and (max-width: 900px) {
        font-size: 2rem;
    }
`
export const CardSubHeader = styled.h4`
    font-size: 1.6rem;
    color: ${darkBlue};
    margin: 0;

    @media (min-width: 800px) and (max-width: 900px) {
        font-size: 1.4rem;
    }
`

export const CardText = styled.p`
    font-size: 1.8rem;
    color: ${darkBlue};

    @media (min-width: 800px) and (max-width: 900px) {
        font-size: 1.4rem;
    }
`

export const Button = styled.button`
    font-size: ${props => props.fontSize ? props.fontSize : '14px'};
    color: ${props => props.color ? props.color : `${black}`};
    border-radius: 1rem;
    text-align: center;
    padding: ${props => props.padding ? props.padding : '0.5em 1.5em'}
`

export const SimpleContainer = styled.div`
    height: ${props => props.height ? props.height : '100vh'};
    width: ${props => props.width ? props.width : '100%'};
    background: ${props => props.background ? props.background : `${tan}`};
    color: ${props => props.color ? props.color : `${white}`};
    display: ${props => props.display ? props.display : 'flex'};
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    justify-content: ${props => props.justify ? props.justify : 'center'};
    align-items: ${props => props.align ? props.align : 'center'};
    overflow: ${props => props.overflow ? props.overflow : 'hidden'}
`