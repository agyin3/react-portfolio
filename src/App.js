import React, { useState, createContext } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Admin from './components/admin/AdminController';

export const APIContext = createContext()

function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <APIContext.Provider value={isLoading, setIsLoading}>
      <Switch>
        <Route exact path='/'>
          <MainPage isLoading={isLoading} setIsLoading={setIsLoading} />
        </Route>
        <Route path='/home'>
          <MainPage isLoading={isLoading} />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
      </Switch>
    </APIContext.Provider>
  );
}

export default App;
