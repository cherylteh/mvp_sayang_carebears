import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
//import AuthContext from "../context/AuthContext";

const NaviBar = ({loggedIn}) => {
  //const { loggedIn } = useContext(AuthContext);
  /* const [loggedIn, setLoggedIn] = useState(undefined);

  const getLoggedIn = () => {
    fetch("/users/loggedIn", {
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((result) => {
        //store it locally
        setLoggedIn(result.data.status);
        console.log(`check boolean: ${result.data.status} should be true or false`);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getLoggedIn();
  }, []); */

  return (
    <div>
      {loggedIn === false && (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/medsup">Medication & Supplements</Link>
          <Link to="/contact">Contacts List</Link>
        </>
      )}
    </div>
  );
};

export default NaviBar;
