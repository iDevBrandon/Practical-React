import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HeaderBlock from "./components/HeaderBlock";
import Login from "./components/Login";
import RoboTaxi from "./components/RoboTaxi";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
            <HeaderBlock />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/robotaxi">
            <RoboTaxi />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
