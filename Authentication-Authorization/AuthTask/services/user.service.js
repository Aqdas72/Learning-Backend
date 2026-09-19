import bcrypt from "bcrypt";
import { userModel } from "../model/user.model.js";


export const createUser = async(username,password)=>{
    const hashedPassword = await bcrypt.hash(password,10);
    const user = new userModel({username,password:hashedPassword});
    return await user.save();
};


export const loginUser = async(username,password)=>{
    const user = await userModel.findOne({username});

    if(!user || !(await bcrypt.compare(password,user.password))){
        throw new Error("Invalid Username or Password");
    }
    return user;
}