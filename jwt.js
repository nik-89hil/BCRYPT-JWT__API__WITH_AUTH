const jwt = require("jsonwebtoken");
require("dotenv").config();


// Example of JWT

const  token = jwt.sign({USERNAME:"NIKHIL",ROLE:"BUYER"}, 
process.env.MY_JWT_SECRET,
{ expiresIn: '6s' });  // expire in 6s


//check expiry by using settimeout

setTimeout(function(){
    let decoded = jwt.verify(token,process.env.MY_JWT_SECRET);
    console.log("after 2 seconds",decoded)
},1000);

setTimeout(function(){
    let decoded = jwt.verify(token,process.env.MY_JWT_SECRET);
    console.log("after 4 seconds",decoded)
},4000);

// below settimeout not work because of expiry of JWT


setTimeout(function(){
    let decoded = jwt.verify(token,process.env.MY_JWT_SECRET);
    console.log("after 8 seconds",decoded)
},8000);



console.log(token);