import express from "express";

import { authenticationToken } from "../middleware/auth.middleware.js";
import { authorization } from "../middleware/authorization.middleware.js";
import User from '../models/user.model.js';

const routes = express.Router();


routes.get("/",authenticationToken , (req,res)=>{
    res.status(200).json({message:"Welcome to private routes",user:req.user});
})

//authorization 
routes.get(
    "/admin",
    authenticationToken,
    authorization("admin"),
    (req, res) => {
        res.status(200).json({
            message: "Welcome Admin",
            user: req.user
        });
    }
);

//only admin can see all users
routes.get("/admin/alluser",authenticationToken,authorization("admin"),async(req,res)=>{
    try {
        const alluser = await User.find({role:"user"},{password:0,__v:0});
        res.status(200).json({
            totalUser:alluser.length,
            allUser:alluser
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})


export default routes;