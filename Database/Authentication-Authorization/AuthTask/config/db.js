import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected Successfuly");
    } catch (error) {
        console.log("Error :",error.message);
        throw error;
    }
}

export default connectDB;