import React, { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Dependent from "./components/Dependent";
//import DependentDetails from "./components/DependentDetails";
import MedInfo from "./components/MedInfo";
import MedSup from "./components/MedSup";
import Register from "./components/Register";
import Login from "./components/Login";



function App() {

  const date = Date().toLocaleString()

  return (
    <div>HELLO and Welcome to Sayang. What would you like to do today?
      Current Time: {date}
    </div>,


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
