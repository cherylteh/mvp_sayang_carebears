import React, { useState } from "react";

export default function AddDependent(props) {
  const [dependent, setDependent] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setDependent({
      ...dependent,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addDependent(dependent);
    // props.addMedSup
  };

  return (
    <div>
      <div className="col-4 container rounded-3 border border-primary bg-light p-4 mt-3">
        <form onSubmit={handleSubmit}>
          <h4>Add New Dependant</h4>
          <small className="text-muted">Enter your dependent details here</small>
          <div className="form-group">
            <label for="dependentName">Name</label>
            <input
              id="dependentName"
              type="text"
              className="form-control"
              placeholder="Enter Dependent Name"
              name="dep_name"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          
          <p>medSup component here</p>
          {/* onSubmit is in form tag */}
          <button
            className="btn btn-outline-primary rounded-pill btn-block"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
