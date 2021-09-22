import React, { useState } from "react";
import "./App.css";

import NaviBar from "./components/NaviBar";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import MedSup from "./components/MedSup";
import Contact from "./components/Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


function App() {

  const date = Date().toLocaleString()

  return (
    <div>
      HELLO and Welcome to Sayang. What would you like to do today?
      Current Time: {date}
      <Router>
        <NaviBar />
        <Switch>
          <Route
            exact
            path="/register"
            render={() => (<Register />)}
          />
          <Route
            exact
            path="/Login"
            render={() => (
              <Login/>
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={() => (
              <Dashboard/>
            )}
          />
          <Route
            exact
            path="/MedSup"
            render={() => (
              <MedSup/>
            )}
          />
          <Route
            exact
            path="/Contact"
            render={() => (
              <Contact/>
            )}
          />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
