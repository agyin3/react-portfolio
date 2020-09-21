import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Admin from './components/admin/AdminController';
import WIP from './pages/WIP';



function App() {

  return (
      <Switch>
        <Route exact path='/'>
          <WIP />
        </Route>
        <Route path='/home'>
          <WIP />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
      </Switch>
  );
}

export default App;
