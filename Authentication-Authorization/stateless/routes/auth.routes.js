import express, { json } from "express";
import User from '../models/user.model.js';
import jwt from "jsonwebtoken";

const routes = express.Router();


//*Routes -> Signup and login

//* signup
routes.post("/signup",async(req,res)=>{
    const {username,password,role} = req.body;

    try {
        const existingUser = await User.findOne({username})

        if(existingUser){
            res.status(400).json({
                message:"User Exist",
                user:existingUser
            })
        }


        const newUser = await User.create({username,password,role});

        newUser.save();

        res.status(201).json({
            message:"User created successfuly",
            user:newUser
        })

    } catch (error) {
        res.status(500).json({
            message:"Failed creating user",
            error:error.message
        })
    }
});

//* login
routes.post("/login",async(req,res)=>{
    const {username,password} = req.body;
    try {
        //?found the user 
        const user = await User.findOne({username})

        //if not found return the error response
        if(!user){
            return res.status(401).json({
                message:"Invalid username or password"
            })
        }

        //? if found --> then compare the password
        const isMatch = await user.comparePassword(password);
        if(!isMatch) return res.status(400).json({message:"Invalid username or password"});

        //? creating jwt tokens
        const token = jwt.sign({id:user._id,username:user.username,role:user.role}, process.env.JWT_SECRET,
            {expiresIn:"1h"}
        );

        res.status(200).json({message:"Login successful",token});

    } catch (error) {
        res.status(500).json({
            message:"Failed creating user",
            error:error.message
        })
    }

});

export default routes;