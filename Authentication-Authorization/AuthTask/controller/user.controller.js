import { createUser, loginUser } from "../services/user.service.js";

export const signup = async(req,res)=>{
    const {username,password} = req.body;
    try {
        const user = await createUser(username,password);  
        res.status(201).json({message:"User created successfully",user});
    } catch (error) {
        res.status(500).json({message:"Error creating user",error});    
    }
} 

export const login = async(req,res)=>{
    const {username,password} = req.body;
    try {
        const user = await loginUser(username,password);
        //save userid in session 
        req.session.userId = user._id;
        console.log("Session ID:", req.session.userId);
        res.status(200).json({
            success:true,
            message:"Login Successful",
            user:user.username
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Error Logging in"
        })        
    }
}

export const logout = async(req,res)=>{
    try {
        req.session.destroy((err) => {
            if (err) {
                console.error("Error destroying session:", err);
                return res.status(500).json({ message: "Error logging out" });
            }
            res.clearCookie("connect.sid"); // Clear the session cookie
            res.status(200).json({ 
                message: "Logout successful" });
        });
    } catch (error) {
        res.status(500).json({ message: "Error logging out" });
    }   
}