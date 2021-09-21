import React, { useState } from "react";
import MedInfo from "./components/MedInfo";
import "./App.css";
import Contact from "./components/Contact";
import Dependent from "./components/Dependent";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Register />
      <Login />
      <Dependent/>
      <Contact />
      <MedInfo />
    </div>
  );
}

export default App;
