import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Contact from './components/Contact.js'
import './App.css'
import AddContactForm from './components/AddContactForm.js'
import pic1 from './images/contact.jpg'
import SearchByLastNameForm from './components/SearchByLastNameForm.js'
import SearchByFirstNameForm from './components/SearchByFirstNameForm.js'
import SearchByIDForm from './components/SearchByIDForm.js'

export default function App(props){
    const [contacts,setContacts] = useState([])
    
    function getContact(){
        axios.get("/getcontacts")
        
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    function searchContactLN(searchItem){
        console.log(searchItem)
        axios.get(`/contacts/search/lastName/${searchItem}`)
        
        .then(res => setContacts(res.data))
        .catch(err => console.log(err))
    }

    
    function searchContactFN(searchItem){
        console.log(searchItem)
        axios.get(`/contacts/search/firstName/${searchItem}`)
        
        .then(res => setContacts(res.data))
        .catch(err => console.log(err))
    }
    
    // function filterBySaved(searchItem){
    //     console.log(searchItem)
    //     axios.get(`/contacts/search/saved/${searchItem}`)
        
    //     .then(res => setContacts(res.data))
    //     .catch(err => console.log(err))
    // }
    function searchContactID(searchItem){
        console.log(searchItem)
        axios.get(`/contacts/${searchItem}`)
        
        .then(res => setContacts(res.data))
        .catch(err => console.log(err))
    }
    function addContact(newContact){
        axios.post("/contacts",newContact)
        .then(res => {
            setContacts(prevContact => [...prevContact, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteContact(contactId){
        axios.delete(`/contacts/${contactId}`)
        .then(res => {
            setContacts(prevContact => prevContact.filter(contact=>contact._id !== contactId))
        })
        .catch(err => console.log(err))
    }

    function editContact(updates, contactId){
        axios.put(`/contacts/${contactId}`, updates)
        .then(res => {
            console.log(res.data)
            setContacts(prevContact => prevContact.map(contact => contact._id !== contactId ? contact : res.data))
            console.log(res.data)
        })
        .catch(err=>console.log(err))
}

    useEffect(() => {
       getContact()
    },[])
    return(
        <div className="grid-container">
        <div className="header"> React Contact List</div>
        <div className="menu"> 
        <AddContactForm 
            submit={addContact} btnText="Add Contact"
        /></div>
        <div className="main">{
            contacts.map(contact=> 
                <Contact
                    {...contact}
                    key={contact._id}
                    deleteContact={deleteContact}
                    editContact={editContact}
                    />)
                    
            }</div>
        <div className="right"><SearchByLastNameForm 
                submit={searchContactLN}
            />
             <SearchByFirstNameForm 
                submit={searchContactFN}
            />
            <SearchByIDForm 
                submit={searchContactID}
                />
            <button onClick={getContact}>Reset Contact List</button>    
            
            {/* <FilterBySaved 
                submit={filterBySaved}
            /> */}</div>
        <div className="footer">FSW-125 Capstone Project: Server Master<br></br>2021</div>
        </div>

    )



}