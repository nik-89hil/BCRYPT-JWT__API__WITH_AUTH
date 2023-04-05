const express = require("express");
const app = express.Router()
const { dataUser } = require("./database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// NOTE : WHEN YOU GET TOKEN RESTART SERVER THAN SEND GET REQUEST OF BUYER/
// SELLER / ADMIN ......


app.use(express.json())

app.post("/", async(req, res) => {
    const { USERNAME, PASSWORD } = req.body;

    let  userfound ={};

    for(let i=0; i< dataUser.length; i++){
        if(dataUser[i].username === USERNAME) userfound = dataUser[i];
    }
   
    if(!userfound){
        res.json({message:"unauthorised"});
        console.log(userfound)
        res.end();
    }

    // console.log(userfound)

    const passwordMatch = await bcrypt.compare(PASSWORD,userfound.hashpass);

    if(!passwordMatch){
        res.json({message:"unauthorised"});
        res.end();
        return
    }

    // console.log(passwordMatch)

    res.json({jwt:jwt.sign(
        {USERNAME: userfound.username,
        ROLE:userfound.role}, 
        process.env.MY_JWT_SECRET,
        { expiresIn: '1h' })
    })


    res.json({ message: "unauthorised" })

})


module.exports = app;