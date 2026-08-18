import express from "express";
import { generateToken } from "../utils/token-utils.js";

const router = express.Router();

// *Generate - Token
router.get("/generate-Token",(req,res)=>{
    const token = generateToken();
    res.status(200).send({
        message:"Token is Generated",
        token:token
    })
})

// *Home Route
router.get("/",(req,res)=>{
    res.status(200).send({
        message:"Welcome to Home Page👌"
    })
})

export default router;
