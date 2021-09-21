import React, { useEffect, useState } from "react";

export default function RegLogin() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    alert("register clicked!");
  };

  const login = () => {
    alert("login clicked!");
  };


  return (
    <div
      className="container">
      <div className="container col-4 rounded-3 border border-primary bg-light bg-opacity-75 bg-gradient p-5 mt-3">
        <div className="registration">
          <h1>Registration</h1>
          <label className="form-label">
            Username
            <input
             class="form-control border border-info"
              type="text"
              onChange={(e) => {
                setUsernameReg(e.target.value);
              }}
            />
          </label>
          <label className="form-label">
            Password
            <input
             class="form-control border border-info"
              type="password"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
          </label>
          <button className="btn btn-primary rounded-pill" onClick={register}>
            {" "}
            Register{" "}
          </button>
        </div>

        <div className="login">
          <h1>Login</h1>
          <input
           class="form-control border border-info"
            type="text"
            placeholder="Username..."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
           class="form-control border border-info"
            type="password"
            placeholder="Password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="btn btn-primary rounded-pill" onClick={login}>
            {" "}
            Login{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
