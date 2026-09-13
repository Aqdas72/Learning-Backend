import mongoose from "mongoose";


const ConnectDB = async ()=>{
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/Products");
        console.log(`MongoDB Connected : ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error : `,error.message);
    }
}

export default ConnectDB; 