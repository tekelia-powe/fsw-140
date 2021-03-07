import React , {useState} from 'react'
import AddContactForm from './AddContactForm.js'

export default function Contact(props) {
    const {firstName, lastName, phone, email, em_contact1, em_contact1_phone, em_contact2_phone, em_contact2, id, saved,deleteContact, editContact} = props;
    const [editToggle, setEditToggle] = useState(false)
    
    
    console.log(saved)
  return (

    <div className="contact">
       { !editToggle ?
          <>
      <form>
      
      ID: {id}<div><h2>Name: <span className="name">{firstName} {lastName}</span></h2></div>
      <div></div><div></div>
            
            <p>Phone: <span className="name2"> {phone}</span></p>
            <p>Email: <span className="name2">{email}</span></p><div></div>
            <p>Emergency Contact: <br></br> #1: <span className="name2">{em_contact1} <span className="name">Ph: </span>{em_contact1_phone}</span><br></br>
            #2: <span className="name2">{em_contact2} <span className="name">Ph: </span> {em_contact2_phone}</span> </p><div></div><br></br>
            
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
                 
                em_contact1 = {em_contact1}
                em_contact1_phone = {em_contact1_phone}
                em_contact2 = {em_contact2}
                em_contact2_phone = {em_contact2_phone}
                 id={id}
                
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