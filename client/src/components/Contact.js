import React, { useEffect, useState } from "react";

export default function Contact(props) {
  let [contact, setContact] = useState([]);
  let [input, setInput] = useState({});

  useEffect(() => {
    getContact();
  }, []);

  const getContact = () => {
    fetch("/contact")
      .then((response) => response.json())
      .then((contact) => {
        console.log(contact);
        setContact(contact);
      })
      .catch((error) => {
        console.log("Error in getContact");
      });
  };

  const handleChange = (e) => {
    //console.log(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact();
    return false;
  };

  /* const handleRemove = (e, contactID) => {
    console.log(contactID);
    deleteContact(contactID);
  }; */

  //ADD NEW CONTACT
  const addContact = () => {
    fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => {
        return res.json();
        //console.log(res.json());
      })
      .then((data) => {
        setContact(data);
        console.log("New Contact Added", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  //DELETE CONTACT by ID
  const deleteContact = (contactID) => {
    //console.log("in Fetch", id); //to check if it's passing through
    fetch(`/contact/${contactID}`, {
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
        setContact(res);
        console.log("Contact Deleted");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="mb-3 container rounded-3 border border-primary bg-light p-4 mt-3">
      <h5>Central Contact List</h5>
        {contact.map((item) => {
          return (
            <ul key={item.contactID}>
              <li>Name: {item.contactName}</li>
              <li>Contact: {item.telNo}</li>
               <li>Relationship: {item.relationship}</li>
            </ul>
          );
        })}
          
      <p/>
        <button 
          class="btn btn-outline-primary btn-sm rounded-pill btn-bloc" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#addNewContact" 
          aria-expanded="false" 
          aria-controls="addNewContact">
          + New Contact
        </button>
    
        
        {/* ADD FORM  */} 
       <p/><div class="collapse" id="addNewContact">
        <div class="card card-body">
          <h5>Add New Contact</h5>
            <small className="text-muted">Enter Frequent Contacts here</small>
        
            <p/><div className="form-group">
              <form className="form-floating">

              <div class="form-floating m-3">
                <input
                  id="floatingInputValue"
                  type="text"
                  className="form-control"
                  placeholder="Enter Contact Name"
                  name="contactName"
                  onChange={(e) => handleChange(e)}
                />
                <label for="floatingInputValue">Contact Name</label>
              </div>

              <div class="form-floating m-3">
                <input
                  id="floatingInputValue"
                  type="text"
                  className="form-control"
                  placeholder="Enter Tel No"
                  name="telNo"
                  onChange={(e) => handleChange(e)}
                />
                <label for="floatingInputValue">Tel No</label>
              </div>
            
              <div class="form-floating m-3">
                <input
                  id="floatingInputValue"
                  type="text"
                  className="form-control"
                  placeholder="Relationship to Dependent"
                  name="relationship"
                  onChange={(e) => handleChange(e)}
                />
                <label for="floatingInputValue">Relationship</label>
              </div>

                <button
                  onClick={(e) => handleSubmit(e)}
                  className="btn btn-outline-primary rounded-pill btn-block"
                  type="submit"
                  value="submit"
                >
                  Click to Add
                </button>
              </form>
            </div>
        </div>
        </div>
        {/* End of ADD FORM  */} 
        </div>
         
  );
}
