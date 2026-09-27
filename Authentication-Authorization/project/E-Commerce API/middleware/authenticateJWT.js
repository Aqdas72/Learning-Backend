import jwt from "jsonwebtoken"

export const authenticateJWT = async (req, res, next) => {
    const token = req.cookies.accessToken;
    console.log(token)
    if(!token){
        return res.status(401).json({
            message:"Access denied. Please login or signup"
        })
    }
    try {
        const decode = await jwt.verify(token,process.env.SECRET_KEY);
        req.user=decode;

        next();
    } catch (error) {
        res.status(401).json({
            message:"Invalid or Expired token"
        })
    }
}