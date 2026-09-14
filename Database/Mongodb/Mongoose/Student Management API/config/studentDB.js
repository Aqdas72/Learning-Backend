import mongoose  from "mongoose";
import "dotenv/config";

const connectDb = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected Successfuly`);
    } catch (error) {
        console.log(`Error:`,error.message);
    }
}

export default connectDb;