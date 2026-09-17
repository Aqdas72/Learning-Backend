import session from "express-session"

export const validateSession = (req,res,next) =>{
    if(!req.session.userId){
        return res.status(401).json({
            message:"Unathorized"
        })
    }
    next();
}