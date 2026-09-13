import mongoose from "mongoose";

const connectDB = async ()=>{
    const conn = await mongoose.connect("mongodb://localhost:27017/notes");
}

export default connectDB;