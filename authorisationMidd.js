function authorisationMiddleware(role){
    return function(req,res,next){
        console.log(req.url,role, res.locals.authInfo);

        if(role !== res.locals?.authInfo?.ROLE){
            res.json({ message: "unauthorised" });
        }
        next();
    }
}

// AUTHORISATION__MIDDLEWARE

module.exports=authorisationMiddleware;