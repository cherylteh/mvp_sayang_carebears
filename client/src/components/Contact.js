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
    <div className="mb-3 container rounded-3 border border-info bg-light p-4 mt-3">
      
      {/* START OF LIST  */} 
      <h4>Frequent Contact List</h4>
      
      <div class="list group">
        
     {/*  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active"> */}
        {contact.map((item) => {
          return (
            <a href="#" class="list-group-item list-group-item-action row">
              {/* <div class="d-flex w-35 justify-content-between"> */}
                <ul key={item.contactID}>
                <h5 class="mb-1"><img src="https://i.postimg.cc/0rRgmFtB/Ssyang-Contact.png" height="25"></img> {item.contactName} ({item.relationship})</h5>
                <p class="mb-1">Contact: {item.telNo}</p>
              </ul>
             {/*  </div> */}
            </a>
          );
        })}
      {/* </a> */}
    
      </div>
    
     <p/>    
      <button
        class="btn btn-outline-info btn-sm rounded-pill btn-bloc"
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
                  className="btn btn-outline-info rounded-pill btn-block"
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
