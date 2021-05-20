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
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
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
            {/* if my user is present, redirect to tesla account page */}
            {user ? <Redirect to="/teslaaccount" /> : <Login />}
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
