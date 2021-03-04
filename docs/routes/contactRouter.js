const express = require('express');
const contactRouter = express.Router();
const app = express();
const uuidV4 = require('uuid.v4');
const mongoose = require('mongoose')
const morgan = require('morgan')

// Connect to DB
const mysql = require('mysql');
const connection = mysql.createConnection({
host: 'localhost',
user:'root',
password:'6276',//password of your mysql db
database:'contactlist'
})

connection.connect((err) => {

  if(err){
    throw err;
  }
  console.log('Connected to the DB 2')
})


//Insert Data into DB
app.get('/insertPost1', (req,res) => {
    let post =  {firstName:"Tekelia", lastName:"Powe", age:44, saved:true, phone:"251-753-8478", email: "tekelia@you.com"}
    let sql = "INSERT INTO contacts SET ?";
  
    connection.query(sql, post, (err, result) => {
  if(err){
    throw err;
  }
  console.log("Data inserted successfully")
  res.send("Data inserted successfully")
    })
  
  })
  
  //Select Data from DB
  app.get('/getcontacts', (req,res) => {
    
    let sql = "SELECT * FROM contacts";
  
    connection.query(sql, (err, result) => {
  if(err){
    throw err;
  }
  console.log(result+"88")
  res.send("SELECT command executed successfully")
    })
  
  })



// const contacts =[
//     {_id: uuidV4(), firstName:"Tekelia", lastName:"Powe", age:44, saved:true, phone:"251-753-8478", email: "tekelia@you.com", em_contact:[]},
//     {_id: uuidV4(), firstName:"", lastName:"", age:44, saved:false, phone:"", email: "", em_contact:[]}
//         ]
// //getAll
// contactRouter.get("/", (req,res) =>{
//     res.status(200).send(contacts)
//     })

// //add new contact to array
// contactRouter.post("/", (req, res) => {
//     const newContact = req.body
//     newContact._id=uuidV4()
//     contacts.push(newContact)
//     res.status(201).send(newContact)

// })

// //delete one
// contactRouter.delete("/:contactId", (req,res) => {
//     const contactId = req.params.contactId
//     const contactIndex = contacts.findIndex(contact => contact._id === contactId)
//     contacts.splice(contactIndex,1)
//     res.send("Successfully deleted the contact!")

// })

// //update one
// contactRouter.put("/:contactId", (req, res) => {

//     const contactId = req.params.contactId
//     const contactIndex = contacts.findIndex(contact => contact._id === contactId)
//     const updatedContact = Object.assign(contacts[contactIndex], req.body)
//     res.status(201).send(updatedContact)
// })

// //search by lastName
// contactRouter.get("/search/lastName/:searchItem", (req,res, next) => {
//     const lastName = req.params.searchItem
//     console.log(res.data)
//     if(!lastName){
//         const err = new Error("You must enter a last name.")
//         res.status(500)
//         return next(err)
//     }
//     const filteredData = contacts.filter(item => item.lastName === lastName)
//     res.send(filteredData)
// })

// //search by firstName
// contactRouter.get("/search/firstName/:searchItem", (req,res, next) => {
//     const firstName = req.params.searchItem
    
//     if(!firstName){
//         const err = new Error("You must enter a first name.")
//         res.status(500)
//         return next(err)
//     }
//     const filteredData = contacts.filter(item => item.firstName === firstName)
//     res.send(filteredData)
// })

// //Get one
// contactRouter.get("/:itemId", (req, res, next) =>{
//     const itemId = req.params.itemId 
//     const foundItem = contacts.filter(item => item._id===itemId)
//     if(!foundItem){
//         const err = new Error(`The Item with id #${itemId} was not found.`)
//         res.status(500)
//         return next(err)
//     }
//     res.status(200).send(foundItem)
//     console.log(foundItem)
// })

// //filtered by saved
// contactRouter.get("/search/saved/:searchItem", (req,res, next) => {
//     const saved = true
    
//     if(!saved){
//         const err = new Error("You must provide an option")
//         res.status(500)
//         return next(err)
//     }
//     const filteredData = contacts.filter(item => item.saved === saved)
//     res.status(200).send(filteredData)
// })  


module.exports = contactRouter