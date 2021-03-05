import React , {useState} from 'react'
import AddContactForm from './AddContactForm.js'

export default function Contact(props) {
    const {firstName, lastName, phone, email, age, em_contact1, em_contact2, id, saved,deleteContact, editContact} = props;
    const [editToggle, setEditToggle] = useState(false)
    const isChecked = (saved ? "Saved" : "Not Saved")
    
    console.log(saved)
  return (

    <div className="contact">
       { !editToggle ?
          <>
      <form>
      {/* <div><h6>ID: # {id}</h6></div><div></div><div></div> */}
      <div><h2>Name: <span className="name">{firstName} {lastName}</span> </h2></div>
      <h4>Age: {age} </h4>
      <div></div>
            
            <p>Phone: {phone}</p>
            <p>Email: {email}</p><div></div>
            <p>Emergency Contact: <br></br> #1: {em_contact1} <br></br>#2: {em_contact2}</p><div></div><br></br>
            
            <button className="delete-btn" onClick={()=> deleteContact(id)}>Delete</button>
            <button className="edit-btn" onClick={()=> setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </form>
            </>
            :
            <>
             <AddContactForm  
                 firstName={firstName}
                 lastName={lastName}
                 email = {email}
                 phone = {phone}
                 age = {age}
                em_contact1 = {em_contact1}
                em_contact2 = {em_contact2}
                 id={id}
                //  saved={saved ==="on"? checked={checked}: ""}
                 btnText="Submit Edit"
                 submit={editContact}
                 editToggle = {setEditToggle}
                
                  />
                  <button onClick={()=> setEditToggle(prevToggle => !prevToggle)}>Close</button>
                  </>
} 
      </div>
  )
}