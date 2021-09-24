import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const login = (e) => {
    e.preventDefault();
    fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((result) => {
        return result.json();
      })

      .then((result) => {
        localStorage.setItem("token", result.token);
        //console.log(result.token);
        window.location.reload("/");
      })
      .catch((error) => console.log(error));
      
  };
  /* style = {
    background: `url("https://source.unsplash.com/1600x900/?medical")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "auto",
  } */
  return (

    <div className="login container col-4 rounded-3 border border-info bg-light bg-opacity-75 bg-gradient p-5 mt-3">
      <img src = "https://i.postimg.cc/nMf8mcFH/Logo-sayang-sq.jpg" alt="sayang background" />
    
      <h1>Login</h1>
      <small className="text-muted">Log in with your data that you entered during registration</small>
      
      <form onSubmit={login}>
        <p />
        <label className="form-label">
          Your Username
          <input
            className="form-control border border-info"
            type="text"
            autoComplete="off"
            placeholder="Username..."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <p />
        <label className="form-label">
          Password
          <input
            className="form-control border border-info"
            type="password"
            autoComplete="off"
            placeholder="Password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <p />
        <button className="btn btn-primary rounded-pill" type="submit">
          Login
        </button>
      </form>

      <p />
      <small className="text-muted">
        Don't have an account?{" "}
        <Link className="nav-item nav-link" to="/register">
          Create Account here
        </Link>
      </small>
    </div>
  );
}
