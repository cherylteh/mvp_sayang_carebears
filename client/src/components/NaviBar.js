import React from "react";
import { Link } from "react-router-dom";

const NaviBar = () => {
  return (
    <div class="container">
      <nav class="navbar fixed-top navbar-light bg-light">
        
        {/* Logo */}
        <a class = "navbar-brand" href="#">
          <img src="https://i.postimg.cc/PqZHRJpB/Logo-SAYANG-2.png" height="50" alt="Sayang Logo"></img>
        </a>
      
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
      </nav>
    </div>
  );
};

export default NaviBar;