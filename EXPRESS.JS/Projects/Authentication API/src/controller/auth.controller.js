import { readfile, writefile } from "../utils/file.utils.js";
import { Generatetoken} from "../utils/token.utils.js";
import bcrypt from "bcrypt";

export const userRegister = async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message:"Please provide a valid data"});
    }

    const userdata = readfile();
    if (userdata.some(user => user.email === email)) {
        return res.json({message:"User already exist"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id:Date.now(),
        name,
        email,
        password:hashedPassword,
    }
    userdata.push(newUser);
    writefile(userdata);

    res.status(201).json({
        message:`user created ${name}`,
    })
}
export const userLogin = async(req,res)=>{
    const {email,password} = req.body;

    const userdata = readfile();
    const finduser = userdata.find((user)=>user.email === email);
    if(!finduser){
        return res.status(401).json({
            message:"Invalid email or password"
        });
    } 

    const isMatch = await bcrypt.compare(password, finduser.password);
    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid password"
        });
    }

    const token = Generatetoken();
    finduser.token = token;
    writefile(userdata);
    res.cookie("usertoken", token, {
        httpOnly: true
    });

    return res.status(200).json({
        message:"Login Successful",
    })
}
export const profile = (req,res)=>{
    return res.status(200).json({
        message:"User Authenticated",
        name:req.user.name,
    })
}
export const userLogout = (req, res) => {
    const token = req.cookies.usertoken;

    if (!token) {
        return res.status(400).json({
            message: "Please login first"
        });
    }

    const userdata = readfile();
    const user = userdata.find(
        user => user.token === token
    );
    if (user) {
        user.token = null;
        writefile(userdata);
    }
    writefile(userdata);

    res.clearCookie("usertoken");

    return res.status(200).json({
        message: "Logout successful"
    });
};