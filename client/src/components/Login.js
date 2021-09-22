import React, { useEffect, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const login = () => {
    fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((result) => {
        //store it locally
        localStorage.setItem("token", result.data.token);
        console.log(
          result.data.token
        );
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
    <div className="login container col-4 rounded-3 border border-primary bg-light bg-opacity-75 bg-gradient p-5 mt-3">
      <img src = "https://i.postimg.cc/nMf8mcFH/Logo-sayang-sq.jpg"/>
      <h1>Login</h1>
      <small className="text-muted">Log in with your data that you entered during registration</small>
      <p/>Your Username<input
        className="form-control border border-info"
        type="text"
        autoComplete="off"
        placeholder="Username..."
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <p/>Password<input
        className="form-control border border-info"
        type="password"
        autoComplete="off"
        placeholder="Password..."
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <p/><button className="btn btn-primary rounded-pill" onClick={login}>
        Login
      </button>

      <p/><small className="text-muted">Don't have an account? Create Account here</small>
    </div>
  );
}
