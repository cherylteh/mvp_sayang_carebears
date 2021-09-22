import React from "react";
import { Link } from "react-router-dom";

const NaviBar = () => {
  return (
    <div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <span className="nav-link">
            <Link to="/register">Register</Link>
          </span>
        </li>
        
        <li className="nav-item">
          <span className="nav-link">
            <Link to="/login">Login</Link>
          </span>
        </li>
        
        <li className="nav-item">
          <span className="nav-link">
            <Link to="/dashboard">Dashboard</Link>
          </span>
        </li>
        
        <li className="nav-item">
          <span className="nav-link">
            <Link to="/medsup">Medication & Supplements</Link>
          </span>
        </li>
        
        <li className="nav-item">
          <span className="nav-link">
            <Link to="/contact">Contacts List</Link>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NaviBar;