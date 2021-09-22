import React from "react";
import Contact from "./Contact";
import Dependent from "./Dependent";
import MedInfo from "./MedInfo";

const Dashboard = () => {
  return (
    <div className="row p-4">
          <div className="col"><Dependent /></div> 
          <div className="col"><Contact /></div>
          <div className="col"><MedInfo /></div> 
    </div>
  );
};
export default Dashboard;
