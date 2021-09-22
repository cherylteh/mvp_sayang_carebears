import React, { useState } from "react";
//import Dependent from "./components/Dependent";
//import MedSup from "./components/MedSup";


export default function DependentDetails(props) {

    let [dependent, setDependent] = useState([]);
    let [detailView, setDetailView] = useState(props.medsup[0]);

  const handleClick = (item) => {
  console.log('Dependent has been clicked', item);
  setDetailView(item) 
  }

  //const classes = useStyles();

    return(  
        <div>List of Dependents
            {dependent && props.dependent.map((item, index) => {
                return <div key={index}> 
                Name: {item.dep_name} (depID:{item.depID}) onClick={() => handleClick(item)} />
                </div>
            })};
    

        <div>
            <div className="col-4 container rounded-3 border border-primary bg-light p-4 mt-3">
            <h4>Medication & Supplement</h4>
                {props.medsup.map(item => {
                    return (
                        <ul key={item.medID}>
                        <li>Dependent ID: {item.depID}</li>
                        <li>Name: {item.medName}</li>
                        <li>Type: {item.medType}</li>
                        <li>Condition: {item.medCondition}</li>
                        <li>Dosage: {item.dosage}</li>
                        <li>Frequency: {item.frequency}</li>
                        </ul> 
                    );
                })}
            </div>
        </div>
        </div>
    )
}

