import { Schema, model} from "mongoose";

//schema - constructor method (used for construction)

const userSchema  = new Schema({
    name:{
        type:String,
        required:true,
        maxLength:50
    },
    age:{
        type:Number,
        required:true,
    },
    weigth:{
        type:Number
    },
    createdAt:{
        type:Date,
        default:Date.now()

    }
})

//model -- is kind of a collection

const userModel = model("user",userSchema); 

export default userModel;