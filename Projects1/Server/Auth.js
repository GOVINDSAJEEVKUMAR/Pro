const authorize = (req,res,next)=>{
    const  {user} = req.query;
    if(!user){
        
        const admin = new user({
            email:"Admin123@gmail.com",
            password:"Admin123"
        });
        
    }else{
        req.user={logged:false}
    }if(req.user.logged){
        next()
    }else{
        res.status(401).send("PLEASE CHECK USERNAME");
    }

};
module.exports = authorize;