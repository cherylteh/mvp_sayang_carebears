import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
//import AuthContext from "../context/AuthContext";

const NaviBar = ({ loggedIn }) => {
  return (
    <div class="container">
      <nav class="navbar fixed-top navbar-light bg-light">
        {/* Logo */}
        <a class="navbar-brand" href="/dashboard">
          <img
            src="https://i.postimg.cc/PqZHRJpB/Logo-SAYANG-2.png"
            height="50"
            alt="Sayang Logo"
          ></img>
        </a>

        <div className="nav justify-content-end">
          {loggedIn === false && (
            <>
              <Link className="nav-item nav-link" to="/register">Register</Link>
              <Link className="nav-item nav-link" to="/login">Login</Link>
            </>
          )}
          {loggedIn === true && (
            <>
              <Link className="nav-item nav-link" to="/dashboard">Dashboard</Link>
              <Link className="nav-item nav-link" to="/medsup">Medication & Supplements</Link>
              <Link className="nav-item nav-link" to="/contact">Contacts List</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NaviBar;
