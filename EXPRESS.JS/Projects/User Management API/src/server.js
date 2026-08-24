import express from 'express';
import userRoutes from "./routes/user.routes.js"

const app = express();
const PORT = 3000;

//*middleware
app.use(express.json());
app.use("/user",userRoutes);

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to User Management API👤✒️");
})

app.listen(PORT,()=>{
    console.log(`Server is runnign on http://localhost:${PORT}`);
})