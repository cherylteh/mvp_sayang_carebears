import React, { useEffect, useState } from "react";

export default function Dependent() {
  let [dependent, setDependent] = useState([]);
  let [depMedsup, setDepMedSup] = useState([]);
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

  
  const getDepMedSup = (id) => {
    fetch(`/details/${id}`)
        .then(response => response.json())
        .then(medsup => {
            console.log(medsup);
            setDepMedSup(medsup);
        })
        .catch(error => {
            console.log("Error in medsup");
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

      <h4>Dependents name: </h4>
      <div className="card rounded-3 border border-primary bg-light p-4">{depMedsup.map((medsup) => {
          return (
              <div key={medsup.medID}>
              <p>Dependent Name: {medsup.dep_name}</p>
              <p>Name: {medsup.medName}</p>
              <p>Type: {medsup.medType}</p>
              <p>Condition: {medsup.medCondition}</p>
              <p>Dosage: {medsup.dosage}</p>
              <p>Frequency: {medsup.frequency}</p>
              </div>
          );
        })}

      {/* START OF DEPENDENT NAME LIST */} 
      <h4>Dependents List</h4>
        <small className="text-muted">Click on the name to view details</small>
        
        <div class="list group"></div>
        {dependent.map((item) => {
          return (
            <a href="#" class="list-group-item list-group-item-action row">
              <ul key={item.depID} onClick={() => {getDepMedSup(item.depID);}}>
              {item.dep_name} (ID:{item.depID})
              </ul>
            </a>
          );
        })}
        </div>
      {/* END OF DEPENDENT NAME LIST */} 
        
      <p/>    
 
      {/* ADD NEW DEPENDENT BUTTON */} 
        <button
          class="btn btn-outline-info btn-sm rounded-pill btn-bloc"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#addNewDependent"
          aria-expanded="false"
          aria-controls="addNewDependent">
          + New Dependent
        </button>
      {/* END OF BUTTON */} 
        
      <p/>
      {/* ADD NEW DEPENDENT FORM  */} 
      <div class="collapse" id="addNewDependent">
        <div class="card card-body">

        <h4>Add New Dependant</h4>
          <small className="text-muted">Enter your dependent details here</small>
          
          <p/><div className="form-group">
            <form className="form-floating">

            <div class="form-floating m-3">
              <input
              id="floatingInputValue"
              type="text"
              className="form-control"
              placeholder="Enter Dependent Name"
              name="dep_name"
              onChange={(e) => handleChange(e)}
            />
            <label for="floatingInputValue">Name</label>
            </div>
  
            <button
              onClick={(e) => handleSubmit(e)}
              className="btn btn-outline-info rounded-pill btn-block"
              type="submit"
              value="submit"
            >Submit Dependent
            </button>
            </form>
          </div>
        </div>
      </div>
      {/* END OF ADD NEW DEPENDENT FORM  */} 

    </div>
  );
}
