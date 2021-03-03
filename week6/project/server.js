const express = require("express");
const app = express();
const morgan = require('morgan')


app.use(express.json());
app.use(morgan('dev'))


app.use("/getcontacts", require('./routes/contactRouter.js'))



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
  let sql = "CREATE TABLE contacts (id INT auto_increment PRIMARY KEY, firstName VARCHAR(100) NOT NULL, lastName VARCHAR(100) NOT NULL, age INT, saved BOOLEAN DEFAULT false, phone VARCHAR(15), email VARCHAR(100))";

  connection.query(sql, (err, result) => {
if(err){
  throw err;
}
console.log("contacts table created successfully")
res.send("contacts table created successfully")
  })

})

//Insert Data into DB
app.get('/insertdata', (req,res) => {
  let post =  {firstName:"Tekelia", lastName:"Terry", age:44, saved:true, phone:"251-753-8478", email: "tekelia@you.com"}
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
console.log(result)
res.send("SELECT command executed successfully")
  })

})

app.listen(9000, () => {
  console.log("The server is running on Port 9000");
})