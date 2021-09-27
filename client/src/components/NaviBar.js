import React from "react";
import { Link, browserHistory, useHistory } from "react-router-dom";

const NaviBar = ({ loggedIn }) => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    alert("You have been logged out.");
    //browserHistory.push("/");
    history.push("/");
    window.location.reload();
  };

  return (
    <>
      {loggedIn === true && (
        <nav class="navbar fixed-top navbar-light bg-light">
          {/* Logo */}
          <Link className="nav-item nav-link" to="/">
            <img
              src="https://i.postimg.cc/sDLhJjr8/logo-sayang-space-hor.png"
              height="50"
              alt="Sayang Logo"
            ></img>
          </Link>

          <div className="nav justify-content-end">
            <Link className="nav-item nav-link" to="/dashboard">
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
            <Link className="nav-item nav-link" onClick={logout}>
              Logout
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default NaviBar;
