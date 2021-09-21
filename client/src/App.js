import React, { useState } from "react";
import MedInfo from "./components/MedInfo";
import "./App.css";
import Contact from "./components/Contact";
import Dependent from "./components/Dependent";
import RegLogin from "./components/RegLogin";

function App() {


  return (

    <div>
      <RegLogin />
      <Dependent/>
      <Contact />
      <MedInfo />
    </div>

  );
}

export default App;
