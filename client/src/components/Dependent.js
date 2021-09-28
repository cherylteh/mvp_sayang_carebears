import React, { useEffect, useState } from "react";

export default function Dependent() {
  let [dependent, setDependent] = useState([]);
  let [depMedsup, setDepMedSup] = useState([]);
  let [active, setActive] = useState("")
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
    <div class="container">      
      <div className="mb-3 container rounded-3 border border-info bg-white p-4 mt-2">
      
        {/* START OF DEPENDENT NAME LIST */} 
        <h4>Dependents List</h4>
        <small className="text-muted">Click to view details</small>
        
        <div class="list group">
          {dependent.map((item) => {
            return (
              <div class="list-group-item list-group-item-action row" key={item.depID}>
                <p class="fs-5 col" ><img src="https://i.postimg.cc/YCHSX2Wv/sayang-profile2.png" height="25" p-3></img>
                  {item.dep_name}</p> {/* (ID:{item.depID}) */}
                  <div class="col d-grid d-md-flex justify-content-md-end">
                    <button class="btn btn-sm btn-outline-secondary"
                      /* className="link link-info" */
                      style={{cursor:'pointer'}} 
                      
                      type="button"
                      value="submit"
                      onClick={() => {getDepMedSup(item.depID); setActive(item.dep_name);}} 
                      data-bs-toggle="collapse"
                      data-bs-target="#medsView"
                      aria-expanded="false"
                      aria-controls="medsView"
                      >   View Medication
                    </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* END OF DEPENDENT NAME LIST */} 
        
        <p/>    
        {/* ADD NEW DEPENDENT BUTTON */} 
        <button
          class="btn btn-outline-info btn-sm rounded-pill btn-block"
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

            <h5>Add New Dependant</h5>
              <small className="text-muted">Enter dependent details here</small>
          
            <p/>
            <div className="form-group">
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
                  className="btn btn-outline-info rounded-pill btn-block shadow rounded"
                  type="submit"
                  value="submit"
                >Click to Add
                </button>

              </form>
            </div>
            
          </div>
        </div>
        {/* END OF ADD NEW DEPENDENT FORM  */} 
      

        {/* START OF MEDICATION VIEW */} 
        <div class="collapse" id="medsView">
        
            {/*   <div className="card rounded-3 border border-info bg-light p-4"> */}
            <h5>Medication / Supplements for {active} </h5>
            <div class="card-body">
              <div class="list group">
              {depMedsup.map((i) => {
                return (
                  <p key={i.medID}>
                    {/* <p>Dependent Name: {medsup.dep_name}</p> */}
                    <span className="fw-bold">{i.medName} </span>
                    {i.medType} for {i.medCondition}  
                    <br />{i.dosage}, {i.frequency}
                  </p>
                );
              })}
              </div>
            </div>
        </div>
        {/* END OF MEDICATION VIEW */}
      </div>     
    </div>
  );
}
