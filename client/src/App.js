import React, { useContext, useState, useEffect } from "react";
import "./App.css";

import NaviBar from "./components/NaviBar";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Dependent from "./components/Dependent";
import MedSup from "./components/MedSup";
import Contact from "./components/Contact";
import AuthContext, { AuthContextProvider } from "./context/AuthContext";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  const date = Date().toLocaleString();
  const [loggedIn, setLoggedIn] = useState(undefined);

  const getLoggedIn = () => {
    fetch("/users/loggedIn", {
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        //store it locally
        console.log(result);
        setLoggedIn(result.status);
        console.log(`check boolean: ${result.status} should be true or false`);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <div>
      <div className="p-5"></div>
      <span className="nav justify-content-end">Current Time: {date}</span>
      <Router>
        <NaviBar loggedIn={loggedIn} />
        <Switch>
          {loggedIn === false && (
            <>
              <Route exact path="/" component={() => <Login />} />
              <Route exact path="/register" component={() => <Register />} />
            </>
          )}
          {loggedIn === true && (
            <>
              <Route exact path="/" component={() => <Dashboard />} />
              <Route exact path="/Dependent" component={() => <Dependent />} />
              <Route exact path="/MedSup" component={() => <MedSup />} />
              <Route exact path="/Contact" component={() => <Contact />} />
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
