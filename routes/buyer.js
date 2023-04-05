const express = require("express");
const app = express.Router()

// BUYER ROUTE
app.get("/",(req,res)=>{
    res.json({message:"buyer page.."})
})


module.exports = app;