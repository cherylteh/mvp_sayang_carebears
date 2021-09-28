import React, { useEffect, useState } from "react";
import MedInfo from "./medInfo";

export default function MedSup() {
  let [medsup, setMedSup] = useState([]);
  let [input, setInput] = useState({});

  useEffect(() => {
    getMedSup();
    getDependent();
    getDepMedSup();
  }, []);

  const getMedSup = () => {
    fetch("/medsup")
      .then((response) => response.json())
      .then((medsup) => {
        console.log(medsup);
        setMedSup(medsup);
      })
      .catch((error) => {
        console.log("Error in medsup");
      });
  };

  const handleChange = (e) => {
    //console.log(e.target.value); // to check on input
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedSup();
    return false;
  };

  /* const handleRemove = (e, medID) => {
    console.log(medID);
    deleteMedSup(medID);
  }; */

  //ADD NEW MEDICATIOn & SUPPLEMENTS
  const addMedSup = () => {
    fetch("/medsup", {
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
        setMedSup(data);
        console.log("New Meds Added", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  //DELETE CONTACT by ID
  const deleteMedSup = (medID) => {
    //console.log("in Fetch", id); //to check if it's passing through
    fetch(`/medsup/${medID}`, {
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
        setMedSup(res);
        console.log("Meds Deleted");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  //FOR THE SELECT DEPENDENT OPTION
  const [dependent, setDependent] = useState([]);

  const getDependent = () => {
    fetch("/dependent")
      .then((response) => response.json())
      .then((dependent) => {
        setDependent(dependent);
      })
      .catch((error) => {
        console.log("Error in getDependent");
      });
  };
  //FOR THE SELECT DEPENDENT OPTION
  const depList = dependent.map((i) => {
    return (
      <option key={i.depID} value={i.depID}>
        {i.dep_name}
      </option>
    );
  });

  const [depMedSup, setDepMedSup] = useState([]);

  const getDepMedSup = (id) => {
    fetch(`/details/${id}`)
      .then((response) => response.json())
      .then((medsup) => {
        console.log(medsup);
        setDepMedSup(medsup);
      })
      .catch((error) => {
        console.log("Error in medsup");
      });
  };

  const getDepName = (i) => {
    //return dependent.map(id => id.dep_name)
    let ddd = dependent.find((obj) => obj.depID === i);
    return ddd?.dep_name ?? "nothing found";
  };

  return (
    <div class="container">
      <div className="row align-items-start">
        {/* ADD FORM  */}
        <div class="col">
          <div className="mb-3 container rounded-3 border border-info bg-light p-4 mt-3">
            <h5>Add New Medication / Supplement</h5>
            <small className="text-muted">
              Enter Medication and Supplements here
            </small>
            <p />

            <div className="form-group">
              <form /* className="form-floating" */>
                {/* Dependent name select */}
                <label for="enterDep">
                  Dependent:
                  <select
                    name="depID"
                    id="enterDep"
                    onChange={(e) => handleChange(e)}
                  >
                    {depList}
                  </select>
                </label>{/* end of Dependent name select */}
                {/* Med/Supplement Name */}
                <div class="form-floating m-3">
                  <input
                    className="form-control"
                    id="floatingInputValue"
                    type="text"
                    placeholder="Enter Meds/Supplement Name"
                    /* autoComplete="off" */
                    name="medName"
                    onChange={(e) => handleChange(e)}
                  />
                  <label for="floatingInputValue">Meds / Supplement Name</label>
                </div>
                {/* SELECT OPTION FOR MED/SUP */}
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option value="Medication">Medication</option>
                    <option value="Supplement">Supplement</option>
                  </select>
                  <label for="floatingSelect">Medication or Supplement?</label>
                </div>{/* end of SELECT OPTION FOR MED/SUP */}
                {/* Med or Supplement  */}
                <div class="form-floating m-3">
                  <input
                    className="form-control"
                    id="floatingInputValue"
                    list="types"
                    type="text"
                    placeholder="Select Medication or Supplement from dropdown"
                    name="medType"
                    onChange={(e) => handleChange(e)}
                  />
                  <label for="floatingInputValue">
                    Medication or Supplement?
                  </label>

                  <datalist id="types">
                    <option value="Medication"></option>
                    <option value="Supplements"></option>
                  </datalist>
                </div>

                {/* Condition  */}
                <div class="form-floating m-3">
                  <textarea
                    className="form-control"
                    id="floatingInputValue"
                    style={{ height: "100px" }}
                    type="text"
                    rows="3"
                    placeholder="What condition is this meds/supplement for?"
                    name="medCondition"
                    onChange={(e) => handleChange(e)}
                  />
                  <label for="floatingInputValue">Condition</label>
                </div>

                <div class="row">
                  {/* Dosage  */}
                  <div class="col">
                    <div class="form-floating m-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingTextarea"
                        list="dosages"
                        placeholder="Select dosage"
                        name="dosage"
                        onChange={(e) => handleChange(e)}
                      />
                      <label for="floatingTextarea">Dosage</label>

                      <datalist id="dosages">
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                      </datalist>
                    </div>
                  </div>

                  {/* Frequency  */}
                  <div class="col">
                    <div class="form-floating m-3">
                      <input
                        className="form-control"
                        id="floatingInputValue"
                        list="frequent"
                        type="text"
                        placeholder="Select Frequency of dosage"
                        name="frequency"
                        onChange={(e) => handleChange(e)}
                      />
                      <label for="floatingInputValue">Frequency</label>

                      <datalist id="frequent">
                        <option value="1 time/day"></option>
                        <option value="2 times/day"></option>
                        <option value="3 times/day"></option>
                        <option value="As required"></option>
                      </datalist>
                    </div>
                  </div>
                  {/* End of Last Row  */}
                </div>

                {/* Submit Button  */}
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="btn btn-outline-info rounded-pill btn-block"
                  type="submit"
                  value="submit"
                >
                  Submit
                </button>
              </form>
              {/* End of Form  */}
            </div>
            {/* End of Form Group  */}
          </div>
          {/* End of ClassName  */}
        </div>
        {/* End of Class  */}
        {/* END OF ADD FORM  */}

        {/* MEDICATION LIST */}
        <div class="col">
          <div className="mb-3 container rounded-3 border border-info bg-light p-4 mt-3">
            <h5>Medication & Supplement</h5>
            <div class="list group">
              {medsup.map((item) => {
                return (
                  <div
                    class="list-group-item list-group-item-action row"
                    key={item.medID}
                  >
                    <p>
                      Name: ({item.medID}){item.medName}, {item.medType} for{" "}
                      {item.medCondition}
                    </p>
                    <p>
                      Dosage: {item.dosage} & Frequency: {item.frequency}
                    </p>
                    <p>
                      for Dep ID {item.depID} Dep Name {getDepName(item.depID)}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* End of List Group  */}
          </div>
          {/* End of ClassName  */}
        </div>
        {/* End of Class  */}
        {/* END OF MEDICATION LIST */}
      </div>
    </div>
  );
}
