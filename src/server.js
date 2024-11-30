const express = require("express");
const app = express();

const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

// blow two paragraph are from ai  
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "stkmngt1",
//   port: 3001 // add the port number here
});


// const db = mysql.createPool({
//      host: "localhost:3001",
//      user: "root",
//      password: "",
//      database: "stkmngt1"
//  });

 app.get("/", (req, res) => {
    //  res.json("hello from the backend");
    const sql = "SELECT * FROM items";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data); //at this point we have the data from the database
        //return res.json({message: "success", data: data});
        //
        
    })
})
 
app.listen(3001, () => {
//  app.listen(3000, () => {
     console.log("Listening to port 3001,Server running on port 3001");
 });





// const express = require("express");
// const app = express();

//  const cors = require("cors");
//  const mysql = require("mysql");
//  const bodyParser = require("body-parser");
 
// ====================
//  app.listen(8081, () => {
//     console.log("Listening to port 8081");
//  });
// =====================

// blow two paragraph are from ai  
// const corsOptions = {
//     origin: "http://localhost:3000",
//     credentials: true
// }

// app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


//  const db = mysql.createPool({
//      host: "localhost",
//      user: "root",
//      password: "",
//      database: "stkmngt1"
//  });

//  app.get("/", (req, res) => {
    // ======
    // res.json("hello from the backend");
    // ==============

    // const sql = "SELECT * FROM items";
    // db.query(sql, (err, data) => {
    //     if (err) return res.json(err);

    
        // return res.json({message: "success", data: data});
     //
        
//     })
// })
 
// app.listen(3001, () => {
//     console.log("Listening to port 3001,Server running on port 3001");

// });

