const express = require("express");
const app = express.Router()

//SELLER ROUTE

app.get("/",(req,res)=>{
    res.json({message:"seller page.."})
})


module.exports = app;