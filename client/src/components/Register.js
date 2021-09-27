import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  function register(e) {
    e.preventDefault();
    fetch("/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usernameReg, passwordReg, passwordRepeat }),
    })
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        //console.log(result);
        alert(result.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="registration container col-4 rounded-3 border border-info bg-light bg-opacity-75 bg-gradient p-5 mt-3">
      <img src = "https://i.postimg.cc/nMf8mcFH/Logo-sayang-sq.jpg" alt="sayang background" />

      <h1>Create Account</h1>
      <small className="text-muted">
        Please enter the following below to create an account
      </small>
      
    <form onSubmit={register}>
        <p />
        <label className="form-label">
          Username
          <input
            className="form-control border border-info"
            value={usernameReg}
            type="text"
            autoComplete="off"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
        </label>

        <p />
        <label className="form-label">
          Password
          <input
            className="form-control border border-info"
            value={passwordReg}
            type="password"
            autoComplete="off"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        </label>
        <p />
        <label className="form-label">
          Repeat Password
          <input
            className="form-control border border-info"
            value={passwordRepeat}
            type="password"
            autoComplete="off"
            onChange={(e) => {
              setPasswordRepeat(e.target.value);
            }}
          />
        </label>

        <p />
        <button className="btn btn-info rounded-pill" type="submit">
          Register
        </button>
      </form>
      <p />
      <small className="text-muted">
        Already have an account?{" "}
        <Link to="/login">
          Login
        </Link>
      </small>
    </div>
  );
}
