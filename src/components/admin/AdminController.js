import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import AddProjectPage from "./dashboard/projects/AddProjectPage";
import PrivateRoute from "../../utils/PrivateRoute";
import LoginPage from "./auth/LoginPage";

const Admin = () => (
  <Switch>
    <PrivateRoute path="/admin/dash" component={Dashboard} />

    <PrivateRoute path="/admin/add-project" component={AddProjectPage} />
    <Route path="/admin/login">
      <LoginPage />
    </Route>
    <Route path="/admin">
      <LoginPage />
    </Route>
  </Switch>
);

export default Admin;
