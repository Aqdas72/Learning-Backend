import express from "express";
import notesRoute from "./routes/notes.routes.js";
import connectDB from "./config/db.js";

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.use("/api",notesRoute);

app.get("/",(req,res)=>{
    res.send(`Welcome to the Notes App`);
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})