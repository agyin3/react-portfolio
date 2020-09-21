import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Admin from "./components/admin/AdminController";
import WIP from "./pages/WIP";
import { PortfolioProvider } from "./context/PortfolioContext";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <PortfolioProvider value={{ loading, setLoading }}>
      <Switch>
        <Route exact path="/">
          <WIP />
        </Route>
        <Route path="/home">
          <WIP />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </PortfolioProvider>
  );
}

export default App;
