import express from "express";
import connectDB from "./config/studentDB.js";
import studentRoutes from "./routes/student.routes.js";
import "dotenv/config";

const app = express();
const port = 3000;

//Global Middleware
app.use(express.json());
connectDB();

//routes
app.use("/api/",studentRoutes);

//Home page 
app.get("/",(req,res)=>{
    res.send(`Welcome to Student Management API App 🧑🏻‍🎓`);
})

app.listen(port,()=>{
    console.log(`Server is runnig on http://localhost:${port}/`);
})