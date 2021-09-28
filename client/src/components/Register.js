import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const history = useHistory();

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
        if (result.message !== "Registration successful. Please login to continue") {
          alert(result.message);
          window.location.reload();
        } else {
          alert(result.message);
          history.push("/");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    
    <div class="registration container-sm rounded-3 border border-info bg-white bg-opacity-75 bg-gradient p-5 shadow rounded">
      <div class="row justify-content-start align-items-center">
        <div class="col-6">
          <img
          src="https://i.postimg.cc/j2wskfbt/logo-sayang-sq-fullsize.png" 
          class="rounded mx-auto" 
          alt="sayang logo"
          />
        </div>

       {/* START OF FORM */}
        <div class="col-6">
          <h1>Create Account</h1>
            <small className="text-muted">
            Please enter the following information to create your account
            </small>
              <form onSubmit={register}> 

                {/*  USERNAME */}
                <div class="form-floating mt-3">           
                  <input
                    className="form-control border border-info"
                    id="floatingInputValue"
                    type="text"
                    autoComplete="off"
                    placeholder="Enter desired username"
                    onChange={(e) => {
                      setUsernameReg(e.target.value);
                    }}
                    value={usernameReg}
                  />
                  <label for="floatingInputValue">
                  Username
                  </label>
                </div>
            
              {/* PASSWORD */}
                <div class="form-floating mt-3">      
                  <input
                    className="form-control border border-info"
                    id="floatingInputValue"
                    type="password"
                    autoComplete="off"
                    placeholder="Enter password: 6 characters or more"
                    onChange={(e) => {
                      setPasswordReg(e.target.value);
                    }}
                    value={passwordReg}
                  />
                  <label for="floatingInputValue">
                  Password
                  </label>
                </div>

              {/* CONFIRM PASSWORD */}
                <div class="form-floating mt-3">      
                  <input
                    className="form-control border border-info"
                    id="floatingInputValue"
                    type="password"
                    autoComplete="off"
                    placeholder="Enter same password"
                    onChange={(e) => {
                      setPasswordRepeat(e.target.value);
                    }}
                    value={passwordRepeat}
                  />
                  <label for="floatingInputValue">
                  Confirm Password
                  </label>
                </div>

            
              <div class="d-grid gap-2 col-12 mt-4">
              <button className="btn btn-info rounded-pill text-white" type="submit">
                Click to Create Account
              </button>
              </div>
          </form>
      
          <p />
            <small className="text-muted">
              Already have an account?&nbsp;
              <Link to="/login">Login here</Link>
            </small>
        </div>

      </div>
    </div>     
  
  );
}
