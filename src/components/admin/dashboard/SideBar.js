import React from 'react'
import { SimpleContainer, Heading, NavLinks } from '../../../styled-components'

const SideBar = () => {
    return (
        <SimpleContainer
        background='#30323d'
        width='25%'
        direction='column'
        justify='flex-start'
        margin='0'
        >
            <Heading
            size='4.8rem'
            align='center'
            hoverSize='5.44rem'
            margin='3rem 0 4rem'
            >
                Buddy's <br /> Dashboard
            </Heading>
            <SimpleContainer
            background='none'
            direction='column'
            height='16rem'
            justify='space-between'
            margin='0'
            >
                <NavLinks
                size='3.2rem'
                hoverSize='3.64rem'
                href='/admin/dash'
                >
                    Projects

                </NavLinks>
                <NavLinks
                size='3.2rem'
                hoverSize='3.64rem'
                href='/admin/add-project'
                >
                    Add Project

                </NavLinks>
                <NavLinks
                size='3.2rem'
                hoverSize='3.64rem'
                onClick={() => localStorage.clear()}
                href='/admin'
                >
                    Sign Out

                </NavLinks>
            </SimpleContainer>
        </SimpleContainer>
    )
}

export default SideBar