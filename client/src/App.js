import React, { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Dependent from "./components/Dependent";
import MedInfo from "./components/MedInfo";
import MedSup from "./components/MedSup";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (

    <div>
      <Register />
      <Login />
      <Dependent/>
      <MedSup/>
      <Contact />
      <MedInfo />
    </div>

  );
}

export default App;
