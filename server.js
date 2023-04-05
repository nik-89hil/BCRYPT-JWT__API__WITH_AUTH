const express = require("express");
const app = express();
const buyer = require("./routes/buyer");
const seller = require("./routes/seller");
const admin = require("./routes/admin");
const auth = require("./routes/auth");
const authenticationMiddleware = require("./authenticateM");
const authorisationMiddleware = require("./authorisationMidd")


// MIDDLEWARE COLLECTION

app.use(express.json());
app.use("/buyer",authenticationMiddleware,authorisationMiddleware(`buyer`),buyer);
app.use("/seller",authenticationMiddleware,authorisationMiddleware(`seller`),seller);
app.use("/admin",authenticationMiddleware,authorisationMiddleware(`admin`),admin);
app.use("/auth",auth);


// HOME ROUTE

app.get("/",(req,res)=>{
    res.send("<h1> home page ..<h1/>")
})


app.listen(8080,()=>{
    console.log("server started at port number : 8080")
})