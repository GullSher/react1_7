const express = require("express");
const app = express();

const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

// blow two paragraph are from ai  
const corsOptions = {
    origin: "http://localhost:3001",
    //origin: "http://localhost:3000",
    credentials: true
    // how can i get rid of confusion that here i have to write the port # 3000 or 3001
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

/*
app.post('/item', (req, res) => {
    const newItem = req.body;
    // Save the new item to the database or perform any other necessary actions
    res.json({ message: 'Item created successfully' });
});
*/

app.post('/item', (req, res) => {

    const newItem = req.body;


  //const sql2 = "INSERT INTO item SET ?";
    const sql2 = "INSERT INTO item (id, name,quantity,price,supplier,catagory,desc) VALUES (?)";
    // i have to match the order of the values and the columns and names of variables from the database 
    //const VALUES = [newItem, newItem.name, newItem.quantity, newItem.price, newItem.supplier, newItem.catagory, newItem.desc];

    //
    const VALUES = [newItem, newItem.name, newItem.quantity, newItem.price, newItem.supplier, newItem.catagory, newItem.desc];

    db.query(sql, newItem, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error inserting item' });
        } else {
            res.json({ message: 'Item created successfully' });
        }
    });
});
// blow post sample is working but i have to find the error why is not my code working
// is from youtube video of https://www.youtube.com/watch?v=CUsCMKXpBGE 
//
/*

app.post('/create', (req,res) => {
	const sql = "INSERT INTO student ('Name', 'Email') VALUES (?)";
	const values = [
		req.body.name,
		req.body.email
]
db.query(sql,[values], (err, data) => {
	if(err) return res.json("Error");
	return res.json(data);
})
})


*/




app.get("/", (req, res) => {
    //  res.json("hello from the backend");
    const sql1 = "SELECT * FROM item";
    db.query(sql1, (err, data) => {
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

// const cors = require("cors");
// const mysql = require("mysql");
// const bodyParser = require("body-parser");

// blow two paragraph are from ai  
// const corsOptions = {
//     origin: "http://localhost:3000",
//     credentials: true
// }

// app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "stkmngt1",
//   port: 3001 // add the port number here
// });


// const db = mysql.createPool({
//      host: "localhost:3001",
//      user: "root",
//      password: "",
//      database: "stkmngt1"
//  });

 // app.get("/", (req, res) => {
    //  res.json("hello from the backend");
    // const sql = "SELECT * FROM items";
    // db.query(sql, (err, data) => {
    //     if (err) return res.json(err);
    //     return res.json(data); //at this point we have the data from the database
        //return res.json({message: "success", data: data});
        //
        
//     })
// })
 
// app.listen(3001, () => {
//  app.listen(3000, () => {
 //     console.log("Listening to port 3001,Server running on port 3001");
 // });





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

