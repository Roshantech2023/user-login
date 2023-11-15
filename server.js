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

app.post('/userssign', (req,res)=> {
    const sql = "INSERT INTO userlists (`name`,`email`,`password`)VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values],(err, data) => {
        if(err){
            return res.json("Error")
        }
        return res.json(data);
    })
})

app.post('/login', (req,res)=> {
    const sql = "SELECT * FROM userlists WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email,req.body.password ],(err, data) => {
        if(err){
            return res.json("Error")
        }
        if(data.length > 0){
            return res.json("success");
        } else {
            return res.json("fail")
        }
    })
})

app.get('/',(req, res) => {
    const sql = "SELECT * FROM listofuser";
    db.query(sql, (err, result)=>{
        if(err) return res.json({message:"Error inside server"});
        return res.json(result);
    })
})

app.listen(8000,()=>{
    console.log("listening")
})