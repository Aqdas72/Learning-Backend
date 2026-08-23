import express from 'express';
import todoDetails from "./routes/todo.routes.js"


const app = express();
const PORT = 3001;

//*middleware
app.use(express.json());
//!for crud and filtering 
app.use("/todos",todoDetails);


//*
app.get("/",(req,res)=>{
    res.status(200).send("Welcome to todo Rest API App");
})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

