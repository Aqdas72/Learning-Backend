import express from "express";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

import User from "../models/user.model.js"

const routes = express.Router();

//* authentication routes
//POST /auth/register
//POST /auth/login
//POST /auth/logout

//? Register
routes.post("/register",async(req,res)=>{
    const {name,email,password,role} = req.body;
    try {
        const ifUserExist = await User.findOne({name},{password:0,__v:0})
        if(ifUserExist){
            return res.status(200).json({message:"User Exist",User:ifUserExist});
        }

        const Newuser = await User.create({name,email,password,role})
        res.status(201).json({
            message:"User created Successfuly",
            user:Newuser
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong"
        })
    }
});

//? Login
routes.post("/login",async(req,res)=>{
    const {name,password} = req.body;
    try {
        //login name --> jwt generate --> token(client pass to server) --> auth for private routes
        const user = await User.findOne({ name });

        if (!user) {
            return res.status(401).json({
                message: "Invalid name or password"
        });
        }

        const checkpassword = await bcrypt.compare(password, user.password);
        if (!checkpassword) {
            return res.status(401).json({
                message: "Invalid name or password"
            });
        }

        //jwt token generate
        const token = await jwt.sign(
            {
                userId:user._id,
                name:name,
                role:user.role
            },
            process.env.SECRET_KEY,
            {
                expiresIn:"1h"
            }
        )

        //creating cookie
        res.cookie("accessToken",token,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:60*60*1000
        })

        res.status(200).json({
            message:"Login Successful",
            token:token
        })
    } catch (error) {
        res.status(500).json({
            message:"Somenthing wents wrong",
            Error:error
        })
    }
}) 

//? Logout 

//ways 
//localstorage remove token
//cookie remove token
//session destroy
//blacklist token - access token + refresh token

//! logout using cookie 
routes.post("/logout",async(req,res)=>{
    const {name,password} = req.body;
    try {
        res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "strict"
    });

    res.status(200).json({
        message: "Logout successful"
    });
    } catch (error) {
        res.status(500).json({
            message:"Something wents wrong"
        })
    }
})

export default routes;