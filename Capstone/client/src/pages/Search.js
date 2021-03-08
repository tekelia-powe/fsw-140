import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Contact from '../components/Contact.js'
import '../App.css'
import Header from '../components/Header.js'
import SearchByLastNameForm from '../components/SearchByLastNameForm.js'
import SearchByFirstNameForm from '../components/SearchByFirstNameForm.js'
import SearchByIDForm from '../components/SearchByIDForm.js'

export default function Search(props){
    const [contacts,setContacts] = useState([])
  
    function getContact(){
        axios.get('/getcontacts')
        
        .then(res => setContacts(res.data))
        .catch(err => console.log(err))
    }

    function sortbyFN(){
        axios.get('/sortbyFN')
        
        .then(res => setContacts(res.data))
        .catch(err => console.log(err))
    }

    function sortbyLN(){
        axios.get('/sortbyLN')
        
        .then(res => setContacts(res.data))
        .catch(err => console.log(err))
    }
    

    function searchContactLN(searchItem){
        axios.get(`/search/lastName/${searchItem}`)
        
        .then(res => setContacts(res.data))
        .catch(err => console.log(err))
    }

    
    function searchContactFN(searchItem){
        console.log(searchItem)
        axios.get(`/search/firstName/${searchItem}`)
        
        .then(res => setContacts(res.data))
        .catch(err => console.log(err))
    }
    
        function searchContactID(searchItem){
        console.log(searchItem)
        axios.get(`/search/${searchItem}`)
        
        .then(res => setContacts(res.data))
        .catch(err => console.log(err))
    }
    
    useEffect(() => {
       getContact()
    },[])
    return(
        <div className="grid-container">
        <Header />
        <div className="menu"> 
        <SearchByLastNameForm 
                submit={searchContactLN}
            />
             <SearchByFirstNameForm 
                submit={searchContactFN}
            />
            <SearchByIDForm 
                submit={searchContactID}
                />
                
            <button onClick={sortbyFN}>Sort by First Name</button>
            <button onClick={sortbyLN}>Sort by Last Name</button><br></br><br></br>
            <button onClick={getContact}>Reset Contact List</button>
            
            {/* <FilterBySaved 
                submit={filterBySaved}
            /> */}</div>
        <div className="main">{
            contacts.map(contact=> 
                <Contact
                    {...contact}
                    key={contact.id}
                    
                    />)
                    
            }</div>
        <div className="right"></div>
        <div className="footer">FSW-125 Capstone Project: Server Master<br></br>2021</div>
        </div>

    )



}