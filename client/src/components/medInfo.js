import React, { useState } from "react";

export default function MedInfo() {
  //const [loading, setLoading] = useState(false);
  const [drugSearch, setDrugSearch] = useState("");
  const [drugName, setDrugName] = useState("");
  const [summary, setSummary] = useState("");
  //const [error, setError] = useState("");

  const handleChange = (e) => {
    //console.log(e.target.value);
    setDrugSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMedInfo();
  };

  const getMedInfo = () => {
    //link to MedLinePlus
    //const API_KEY = "45d11eff1cff97f1b9e10ecd6c9a52ad";
    //const BASE_URL = "https://connect.medlineplus.gov/service?";
    const finalURL = `https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.69&mainSearchCriteria.v.dn=${drugSearch}&informationRecipient.languageCode.c=en&knowledgeResponseType=application/json`;

    fetch(finalURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDrugName(data.feed.entry[0].title._value);
        setSummary(data.feed.entry[0].summary._value);
        console.log(data);
      })
      .catch((error) => {
        console.log(
          "This drug may not be FDA-approved and not in the database"
        );
      });
  };

  return (
    <div className="card rounded-3 border border-primary bg-light p-4 pt-3">
      <h4>Search for Drug Info</h4>
      <i>
        <small className="text-muted">
          Note: This seach is only applicable to USA FDA-approved drugs. For
          best results, please enter the generic name (vs brand name)
        </small>
      </i>
      <p>
        <form 
          className="form-floating"
          onSubmit={handleSubmit}
        >
          
          <input
            id="floatingInputValue"
            className="form-control"
            type="text"
            name="drugSearch"
            value={drugSearch}
            placeholder="Enter Name of Drug"
            onChange={handleChange}
          />
          <label for="floatingInputValue">Enter Name of Drug</label>
          
          <p/><button 
            className="btn btn-outline-primary rounded-pill btn-block" 
            type="submit"
            data-bs-toggle="collapse" 
            data-bs-target="#drugInfo" 
            aria-expanded="false" 
            aria-controls="drugInfo"
            >
            Submit
          </button>
        </form>
      </p>

     {/* DRUG INFO RESULTS  */} 
      <p/><div class="collapse" id="drugInfo">
        <div class="card card-body">
          <b>About {drugSearch}</b>
          <p><b>Generic Name:</b> {drugName}</p>
          <p class="lh-sm"><b>Summary:</b> {summary}</p>
        </div>

        <div>
        <small className="text-muted">
          If the medication you are searching for is not FDA-approved, please
          search using the following websites:
          <br />
          <a href="https://mims.com" target="_blank">
            MIMS
          </a>{" "}
          - <i>Asia-based.</i>
          <br />
          <a href="https://www.medicines.org.uk/emc/" target="_blank">
            Medicines.org.uk
          </a>{" "}
          - <i>UK-based.</i>
        </small>
      </div>
    </div>
    </div>
  );
}
