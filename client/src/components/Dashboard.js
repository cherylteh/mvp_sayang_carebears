import React from "react";
import Contact from "./Contact";
import Dependent from "./Dependent";
import MedInfo from "./medInfo";

const Dashboard = () => {
  return (
    <div classname="row">
      HELLO and Welcome to Sayang. What would you like to do today?
          <div className="col"><Dependent /></div> 
          <div className="col"><Contact /></div>
          <div className="col"><MedInfo /></div> 
    </div>
  );
};
export default Dashboard;