import React, { useEffect, useState } from "react";

export default function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  function register() {
    fetch("/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usernameReg, passwordReg }),
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
  };

  return (
    <div className="registration container col-4 rounded-3 border border-primary bg-light bg-opacity-75 bg-gradient p-5 mt-3">
      <h1>Registration</h1>
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
      <button className="btn btn-primary rounded-pill" onClick={register}>
        Register
      </button>
    </div>
  );
}
