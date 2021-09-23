import React, { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(undefined);

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
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
