import { Router } from "express";
import User from "../model/user.model.js";
const routes = Router();

//CRUD operation 


routes.post("/users",async (req,res)=>{
    try {
        const {name , age , weight} = req.body;
        const newUser = new User({name,age,weight});
        await newUser.save();
        //? save() method is used to save the document in the database. It returns a promise that resolves to the saved document.

        res.status(201).json({
            success:true,
            user:newUser
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
routes.get("/users",async (req,res)=>{
    try {
        const users = await User.find();

        res.status(200).json({
            success:true,
            data:users
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
routes.put("/update-user/:id",async (req,res)=>{
    const {id} = req.params;
    const {name,age,weight} = req.body;
    try {
        //const user = await User.find({_id:id});
        const updatedUser = await User.findByIdAndUpdate(id,{name,age,weight},{new:true});
        if(!updatedUser){
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }   
        res.status(200).json({
            success:true,
            data:updatedUser
        });



    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
routes.delete("/delete-user/:id",async (req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"User deleted successfully"
        }); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default routes;