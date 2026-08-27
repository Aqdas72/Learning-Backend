import express from 'express';
import authUser from "./routes/auth.routes.js";
import cookieparser from "cookie-parser";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieparser());
app.use("/auth",authUser);


app.get("/",(req,res)=>{
    res.status(200).send("Welcome to User Authentication API ");
})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})