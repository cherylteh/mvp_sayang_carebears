import React, {useState} from "react";
import Contact from "./Contact";
import Dependent from "./Dependent";
import MedInfo from "./medInfo";

const date = Date().toLocaleString();
const Dashboard = () => {

  return (
    <div className="container-xl">

      <p class="text-secondary text-left"><h3>HELLO! It's currently {date}. 
      <p/>What would you like to do today?</h3></p>

      <div className="row">
          <div className="col-lg"><Dependent /></div> 
          <div className="col-lg"><Contact /></div>
          <div className="col-lg"><MedInfo /></div> 
          </div>
    </div>
  );
};
export default Dashboard;