const express = require("express");
const app = express.Router()


// this is for Admin route

app.get("/",(req,res)=>{
    res.json({message:"admin page.."})
})


module.exports = app;