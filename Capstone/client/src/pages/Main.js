import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Contact from '../components/Contact.js'
import '../App.css'
import AddContactForm from '../components/AddContactForm.js'
import Header from '../components/Header.js'


export default function Main(props){
    const [contacts,setContacts] = useState([])
    

    function getContact(){
        axios.get('/getcontacts')
        
        .then(res => setContacts(res.data))
        .catch(err => console.log(err))
    }

    function addContact(newContact){
        axios.post('/insertcontacts',newContact)
        .then(res => {
            setContacts(prevContact => [...prevContact, res.data])
        })
        .catch(err => console.log(err))
        getContact();
    }

    function deleteContact(contactId){
        axios.delete(`/delcontact/${contactId}`)
        .then(res => {
            setContacts(prevContact => prevContact.filter(contact=>contact.id !== contactId))
            getContact();
        })
        .catch(err => console.log(err))
    }

    function editContact(updates, contactId){
        axios.put(`/editcontact/${contactId}`, updates)
        .then(res => {
            
            setContacts(prevContact => prevContact.map(contact => contact.id !== contactId ? contact : res.data))
            getContact()
        })
        .catch(err=>console.log(err))
}

    useEffect(() => {
       getContact()
    },[])
    return(
        <div className="grid-container">
        <Header />
        <div className="menu"> 
        <AddContactForm 
            submit={addContact} btnText="Add Contact"
        /></div>
        
        <div className="main">
            <div className = "main_grid">
                {
            contacts.map(contact=> 
                <Contact
                    {...contact}
                    key={contact.id}
                    deleteContact={deleteContact}
                    editContact={editContact}
                    />)
                    
            }</div></div>
        
        <div className="footer">FSW-140 Capstone Project: Full Stack Crossover <br></br>2021</div>
        </div>

    )



}