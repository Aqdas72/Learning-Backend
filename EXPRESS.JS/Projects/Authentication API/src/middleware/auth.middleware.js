import { readfile } from "../utils/file.utils.js";
import { verifyToken } from "../utils/token.utils.js";

export const authMiddleware = (req,res,next)=>{
    const userdata = readfile();
    const token = req.cookies.usertoken;
    const isToken = verifyToken(token);
    if(!isToken){
        return res.status(404).json({
            message:"Invalid Token"
        })
    }

    const isUserAuth = userdata.find((user)=>user.token === token);
    if(!isUserAuth){
        return res.status(401).json({
            message:"Invalid User or token"
        })
    }
    req.user = isUserAuth;
    next();
}