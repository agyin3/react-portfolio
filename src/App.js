import React, { useState, createContext } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Admin from './components/admin/AdminController';



function App() {

  return (
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route path='/home'>
          <MainPage />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
      </Switch>
  );
}

export default App;
