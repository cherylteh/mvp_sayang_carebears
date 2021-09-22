import React, { useEffect, useState } from "react";

export default function Dependent(props) {
  let [dependent, setDependent] = useState([]);
  let [input, setInput] = useState({});

  useEffect(() => {
    getDependent();
  }, []);

  const getDependent = () => {
    fetch("/dependent")
      .then((response) => response.json())
      .then((dependent) => {
        console.log(dependent);
        setDependent(dependent);
      })
      .catch((error) => {
        console.log("Error in getDependent");
      });
  };

  const handleChange = (e) => {
    //console.log(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDependent();
    return false;
  };

  //ADD NEW DEPENDENT
  const addDependent = () => {
    fetch("/dependent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDependent(data);
        console.log("New Dependent Added", data);
        //props.updateDependent()
        //alert(`New Dependent ${dependent.dep_name} Added`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //DELETE DEPENDENT BY ID
  const deleteDependent = (depID) => {
    //console.log("in Fetch", id); //to check if it's passing through
    fetch(`/dependent/${depID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setDependent(res);
        //props.updateEvent();
        console.log("Dependent Deleted");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div>
      <div className="card rounded-3 border border-primary bg-light p-4">
        <h4>Dependents List</h4>
        <small className="text-muted">Click on names to view records</small>
        {dependent.map((item) => {
          return (
            <ul>
              <li key={item.depID}>
                {" "}
                Name: {item.dep_name} (depID:{item.depID}){" "}
              </li>
            </ul>
          );
        })}

        <h4>Add New Dependant</h4>
        <form>
          <small className="text-muted">
            Enter your dependent details here
          </small>
          <div className="form-group">
            <label for="dependentName">Name</label>
            <input
              id="dependentName"
              type="text"
              className="form-control"
              placeholder="Enter Dependent Name"
              name="dep_name"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <p>medSup component here</p>
          {/* onSubmit is in form tag */}
          <button
            onClick={(e) => handleSubmit(e)}
            className="btn btn-outline-primary rounded-pill btn-block"
            type="submit"
            value="submit"
          >
            Submit Dependent
          </button>
        </form>
      </div>
    </div>
  );
}
