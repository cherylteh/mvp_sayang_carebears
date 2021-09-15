import React, { useState } from "react";
import MedInfo from "./components/medInfo";
import "./App.css";
import AddDependent from "./components/AddDependent";

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
      <h1>Sayang App by Team CareBears</h1>
      <AddDependent addDependent={project => handleAddDependent(project)}/>
      <MedInfo />
    </div>
  );
}

export default App;
