import React, {useState} from "react";
import Contact from "./Contact";
import Dependent from "./Dependent";
import MedInfo from "./medInfo";

const date = Date().toLocaleString();
const Dashboard = () => {

  return (
    <div className="container-xl bg-white">

      <h4 class="text-secondary text-right">It is currently {date}. </h4>
     

      <div className="row">
          <div className="col-5"><Dependent /></div> 
          <div className="col-lg"><Contact /></div>
          <div className="col-lg"><MedInfo /></div> 
          </div>
    </div>
  );
};
export default Dashboard;