const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "userssign"
})

app.get('/',(req, res) => {
    const sql = "SELECT * FROM listofuser";
    db.query(sql, (err, result)=>{
        if(err) return res.json({message:"Error inside server"});
        return res.json(result);
    })
})

app.listen(8080,()=>{
    console.log("listening")
})