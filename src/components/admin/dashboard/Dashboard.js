import React from 'react'
import { SimpleContainer } from '../../../styled-components'
import SideBar from './SideBar'
import ProjectList from './projects/ProjectList'

const Dashboard = () => {

    return(
        <SimpleContainer
        height='100%'
        overflow='hidden'
        >
            <SideBar />
            <ProjectList />
        </SimpleContainer>
    )
}

export default Dashboard