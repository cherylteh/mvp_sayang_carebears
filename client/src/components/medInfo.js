import React, { useState } from "react";


export default function MedInfo() {
  //const [loading, setLoading] = useState(false);
  const [drugSearch, setDrugSearch] = useState("");
  const [drugName, setDrugName] = useState("");
  const [summary, setSummary] = useState("");
  //const [error, setError] = useState("");
  
  const handleChange = e => {
    //console.log(e.target.value);
    setDrugSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getMedInfo();
  };

  const getMedInfo = () => {
    //link to MedLinePlus 
    //const API_KEY = "45d11eff1cff97f1b9e10ecd6c9a52ad";
    //const BASE_URL = "https://connect.medlineplus.gov/service?";
    const finalURL = `https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.69&mainSearchCriteria.v.dn=${drugSearch}&informationRecipient.languageCode.c=en&knowledgeResponseType=application/json`;

    fetch(finalURL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setDrugName(data.feed.entry[0].title._value);
        setSummary(data.feed.entry[0].summary._value);
        console.log(data)
       
      })
      .catch(error => {
        console.log('This drug may not be FDA-approved and not in our database');
      });
  };

  return (
    <div>
      <h3>Search for Drug Info</h3>
      <i>Note: This seach is only applicable to USA FDA-approved drugs. 
          For best results, please enter the generic name (vs brand name) </i>
        <p>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="drugSearch"
            value={drugSearch}
            placeholder="Enter Name of meds here"
            onChange={handleChange}
            />
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
        </p>

      <div>
        Name of Drug entered: {drugSearch} 
        <br/>
        
        <p/>
        Generic Name: {drugName}
        <p/>
        Summary: {summary}
      </div>

      <div>
        <p/>If the medication you are searching for is not FDA-approved, please search using the following websites:
        <br/><a href="https://mims.com" target="_blank">MIMS</a> - <i>Asia-based.</i>
        <p/><a href="https://www.medicines.org.uk/emc/" target="_blank">Medicines.org.uk</a> -<i>UK-based.</i> 
      </div>
    </div>
  );
}