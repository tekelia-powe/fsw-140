const express = require("express");
const app = express();
const morgan = require('morgan')


app.use(express.json());
app.use(morgan('dev'))


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
  console.log('Connected to the DB')
})

//create a database
app.get('/createDB', (req,res) => {
  let sql = "CREATE DATABASE contactList";

  connection.query(sql, (err, result) => {
if(err){
  throw err;
}
console.log("contactList database created successfully")
res.send("contactList database created successfully")
  })

})

//create a database table
app.get('/createtable', (req,res) => {
  let sql = "CREATE TABLE contacts (id INT auto_increment PRIMARY KEY, firstName VARCHAR(100) NOT NULL, lastName VARCHAR(100) NOT NULL, phone VARCHAR(15), email VARCHAR(100),em_contact1 VARCHAR(100),em_contact1_phone VARCHAR(100),em_contact2 VARCHAR(100),em_contact2_phone VARCHAR(100))";

  connection.query(sql, (err, result) => {
if(err){
  throw err;
}
console.log("contacts table created successfully")
res.send("contacts table created successfully")
  })

})

//Insert Inital Data into DB
app.get('/insertdata', (req,res) => {
  let post =  {firstName:"Tekelia", lastName:"Terry", phone:"251-753-8478", email: "tekelia@you.com"}
  let sql = "INSERT INTO contacts SET ?";

  connection.query(sql, post, (err, result) => {
if(err){
  throw err;
}
console.log("Data inserted successfully")
res.send("Data inserted successfully")
  })

})

// //Insert Data into DB from Form
app.post('/insertcontacts', (req,res) => {
  
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  
  const phone = req.body.phone
  const email = req.body.email
  const em_contact1 = req.body.em_contact1
  const em_contact1_phone = req.body.em_contact1_phone
  const em_contact2 = req.body.em_contact2
  const em_contact2_phone = req.body.em_contact2_phone

  let sql = "INSERT INTO contacts (firstName, lastName,phone, email, em_contact1, em_contact1_phone, em_contact2, em_contact2_phone)  VALUES (?,?,?,?,?,?,?,?)";
  


  connection.query(sql,[firstName, lastName, phone, email,em_contact1,em_contact1_phone, em_contact2, em_contact2_phone], (err, result) => {
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
res.send(result)
})

})

//Sort By First Name
app.get('/sortbyFN', (req,res) => {
  
  let sql = "SELECT * FROM contacts ORDER BY firstName";

  connection.query(sql, (err, result) => {
if(err){
  throw err;
}
res.send(result)
})

})

//Sort By Last Name
app.get('/sortbyLN', (req,res) => {
  
  let sql = "SELECT * FROM contacts ORDER BY lastName";

  connection.query(sql, (err, result) => {
if(err){
  throw err;
}
res.send(result)
})

})
//Delete Data from DB
app.delete('/delcontact/:contactId', (req,res) => {
  
  const id = req.params.contactId;
  let sql = "DELETE FROM contacts WHERE id=?";

  connection.query(sql, id, (err, result) => {
if(err){
  throw err;
}
res.send(result)
})

})

//Edit Data from DB
app.put('/editcontact/:contactId', (req,res) => {
  
  const id = req.params.contactId;
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  
  const phone = req.body.phone
  const email = req.body.email
  const em_contact1 = req.body.em_contact1
  const em_contact1_phone = req.body.em_contact1_phone
  const em_contact2 = req.body.em_contact2
  const em_contact2_phone = req.body.em_contact2_phone

  let sql = "UPDATE contacts SET firstname=?, lastName =?,phone =?, email =?,em_contact1 =?, em_contact1_phone =?, em_contact2 =? ,em_contact2_phone=? WHERE id=?";

  connection.query(sql, [firstName, lastName,phone, email, em_contact1, em_contact1_phone, em_contact2, em_contact2_phone, id], (err, result) => {
if(err){
  throw err;
}
res.send(result)
})

})

//Search by First Name
app.get('/search/firstname/:fname', (req,res) => {
  
  const fname = req.params.fname;

  let sql = "SELECT * FROM contacts WHERE firstName=?";

  connection.query(sql, fname, (err, result) => {
if(err){
  throw err;
}
res.send(result)

})

})

//Search by Last Name
app.get('/search/lastname/:lname', (req,res) => {
  
  const lname = req.params.lname;

  let sql = "SELECT * FROM contacts WHERE lastName=?";

  connection.query(sql, lname, (err, result) => {
if(err){
  throw err;
}
res.send(result)

})

})

//Search by ID
app.get('/search/:id', (req,res) => {
  
  const id = req.params.id;

  let sql = "SELECT * FROM contacts WHERE id=?";

  connection.query(sql, id, (err, result) => {
if(err){
  throw err;
}
res.send(result)

})

})

app.listen(9000, () => {
  console.log("The server is running on Port 9000");
})