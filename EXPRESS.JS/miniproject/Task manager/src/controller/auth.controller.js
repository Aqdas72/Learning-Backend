export const Login = (req,res)=>{
    const {username} = req.body;//accessing username from body object

    if(!username){
        return res.status(400).json({error:"username is required"});
    }
    req.session.user = {username}; 
    res.cookie("username",username,{httpOnly:true,maxAge:1000*60*60*24});//make one cookie with key : username
                                                                                    //  value: username data
    res.json({message:"Loging Successful",username})

}
export const authMiddleware = (req, res, next) => {
    console.log("AUTH SESSION:", req.session);
    console.log("AUTH USER:", req.session?.user);

    if (req.session?.user) {
        return next();
    }

    return res.status(401).json({
        message: "Unauthorized: Please Login In"
    });
};

export const Logout = (req,res)=>{
    res.clearCookie("username");
    req.session.destroy((err)=>{
        if(err){
            res.status(500).json({error:"error logging out"});
        }
        res.json({message:"Logout Successful"});
    })
}