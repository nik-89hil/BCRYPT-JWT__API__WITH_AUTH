const jwt = require("jsonwebtoken");

// AUTHENTICATION MIDDLEWARE

async function authenticationMiddleware(req,res,next){
    const authorisationHeader = req.headers.authorization;

    if(!authorisationHeader){
        res.json({message:"forbidden"});
        res.end();
        return;
    }

    const authtoken = authorisationHeader.split(" ")[1];
    // console.log(authtoken);

    try {
        const {USERNAME,ROLE} =   jwt.verify(authtoken,process.env.MY_JWT_SECRET);
        // console.log({USERNAME,ROLE});
        res.locals.authInfo = {USERNAME,ROLE};
     
    } catch (error) {
        console.log(error);
        res.end();
    }
    

    next()
} 


module.exports= authenticationMiddleware;