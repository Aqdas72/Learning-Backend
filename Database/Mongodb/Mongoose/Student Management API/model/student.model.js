import { Schema,model, } from "mongoose";

//Schema - is constructor function(its like a blueprint for creating new objects)
const studentsSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        minlength:[3, "Name must be at least 3 characters"]
    },
    age:{//age must be btw 17-30
        type:Number,
        required:true,
        min:[17,"Age should be greater than 17"],
        max:[30,"Age must be lower than 30"]
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    course:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true,
        min:1,
        max:4
    },
    marks:{
        type:Number,
        min:0,
        max:100
    },
    skills:{
        type:[String],
    },
    address:{
        city:{
            type:String,
            required:true
        },
        pincode:{
            type:Number,
            required:true
        }
    },
    isActive:{
        type:Boolean,
        default:true
    },
},{timestamps:true});
//automatically create createdAt and updatedAt

const studentModel = model("Student-Management",studentsSchema);

export default studentModel;