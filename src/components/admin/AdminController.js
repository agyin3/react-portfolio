import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './auth/Login'
import Dashboard from './dashboard/Dashboard'
import AddProjectPage from './dashboard/projects/AddProjectPage'
import PrivateRoute from '../../utils/PrivateRoute'

const Admin = () => (
    <Switch>
        <Route exact path='/admin'>
            <Login />
        </Route>

        <Route exact path='/admin/login'>
            <Login />
        </Route>
        
        <PrivateRoute path='/admin/dash' component={Dashboard} />

        <PrivateRoute path='/admin/add-project' component={AddProjectPage} />
    </Switch>
)

export default Admin