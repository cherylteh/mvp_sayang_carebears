import React from "react";
import { Link } from "react-router-dom";

const NaviBar = ({ loggedIn }) => {

  const logout = () => {
    localStorage.clear();
    alert("You have been logged out successfully");
    window.location.reload();
  };

  return (
    <>
      {loggedIn === true && (
        <nav class="navbar fixed-top navbar-light bg-light">
          <div class="container-fluid">
          {/* Logo */}
          <a class="navbar-brand" href="/dashboard">
            <img
              src="https://i.postimg.cc/sDLhJjr8/logo-sayang-space-hor.png"
              height="50"
              alt="Sayang Logo"
            ></img>
          </a>

          <div className="nav justify-content-end">
            <>
              <Link className="nav-item nav-link" to="/">
                Dashboard
              </Link>
              <Link className="nav-item nav-link" to="/dependent">
                Dependent
              </Link>
              <Link className="nav-item nav-link" to="/medsup">
                Medication & Supplements
              </Link>
              <Link className="nav-item nav-link" to="/contact">
                Contacts List
              </Link>
              <Link className="nav-item nav-link" to="/medinfo">
                Search Drug Info
              </Link>
              <button className="nav-item nav-link" onClick={logout}>
                Logout
              </button>
            </>
          </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NaviBar;
