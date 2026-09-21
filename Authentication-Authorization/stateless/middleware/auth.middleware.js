import jwt from "jsonwebtoken";
import express from "express"


export const authenticationToken = async(req,res,next)=>{
    const token = req.header("Authorization");
    if(!token) return res.status(401).json({message:"Access denied . No token provided"});

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decode);
        req.user = decode;
        next();
    } catch (error) {
        res.status(401).json({
            message:"Something went wrong",
            error:error.message
        })
    }
}