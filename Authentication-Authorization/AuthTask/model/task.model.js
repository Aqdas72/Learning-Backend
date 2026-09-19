import mongoose, { model } from "mongoose";


const taskSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    completed:{
        type:Boolean,
        default:false
    }
})

export const taskModel = mongoose.model("Task",taskSchema);