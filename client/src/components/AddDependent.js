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
    <div className="row">
      <div className="col-6 col-md-4 rounded">
        <form onSubmit={handleSubmit}>
          <h5 className="p-3">Enter your dependent details here</h5>
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
            className="btn btn-outline-primary btn-lg btn-block"
            type="sumbit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
