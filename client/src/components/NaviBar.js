import React from "react";
import { Link, Redirect } from "react-router-dom";

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
          {/* Logo */}
          <a class="navbar-brand" href="/dashboard">
            <img
              src="https://i.postimg.cc/PqZHRJpB/Logo-SAYANG-2.png"
              height="50"
              alt="Sayang Logo"
            ></img>
          </a>

          <div className="nav justify-content-end">
            <>
              <Link className="nav-item nav-link" to="/">
                Dashboard
              </Link>
              <Link className="nav-item nav-link" to="/medsup">
                Medication & Supplements
              </Link>
              <Link className="nav-item nav-link" to="/contact">
                Contacts List
              </Link>
              <button className="nav-item nav-link" onClick={logout}>
                Logout
              </button>
            </>
          </div>
        </nav>
      )}
    </>
  );
};

export default NaviBar;
