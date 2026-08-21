import express from 'express';
import noteRoutes from "./routes/notes.routes.js"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/notes",noteRoutes);

app.get("/",(req,res)=>{
    res.send("Welcome to Notes App📝");
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})


//create simple crud api 
//