import mongoose from "mongoose";
import bcrypt from "bcrypt"

//schema for user buyer and seller
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        ename:["user","seller","admin"],
        default:"user"
    }
})

userSchema.pre("save",async function(){
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password,10)
})



export default mongoose.model("Ecommerce",userSchema);