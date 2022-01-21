import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Admin from "./components/admin/AdminController";
import Homepage from "./components/homepage/Homepage";

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route path="/home">
                <Homepage />
            </Route>
            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
    );
}

export default App;
