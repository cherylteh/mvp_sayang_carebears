import React, { useState } from "react";
import MedInfo from "./components/medInfo";
import "./App.css";
import Contact from "./components/Contact";
import AddDependent from "./components/AddDependent";
import RegLogin from "./components/RegLogin";

function App() {
  const [dependent, setDependent] = useState([]);

  const handleAddDependent = project => {
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ dependent })
    })
      .then(res => res.json())
      .then(dependent => {
        setDependent(dependent);
        alert(`New Dependent ${dependent.dep_name} Added`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <RegLogin />
      <AddDependent addDependent={project => handleAddDependent(project)}/>
      <Contact />
      <MedInfo />
    </div>
  );
}

export default App;
