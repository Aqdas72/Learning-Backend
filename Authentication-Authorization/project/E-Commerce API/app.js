import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

dotenv.config();
//connecting to database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log(`MongoDB connected`)})
.catch((err)=>{console.log(`MongoDB connection error`,err.message)})


app.get("/", (req, res) => {
    res.send("Welcome to the E-Commerce API!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});