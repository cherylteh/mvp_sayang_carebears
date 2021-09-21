import React, { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Dependent from "./components/Dependent";
import MedInfo from "./components/MedInfo";
import MedSup from "./components/MedSup";
import RegLogin from "./components/RegLogin";

function App() {


  return (

    <div>
      <RegLogin />
      <Dependent/> 
      <MedSup/>
      <Contact />
      <MedInfo />
    </div>

  );
}

export default App;
