import {Schema,model} from "mongoose"

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true});

export const userModel = model("User",userSchema);

