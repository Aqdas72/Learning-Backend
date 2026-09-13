import express from 'express';
import connectDB from './config/db.js';
import userRoute from './routes/user.routes.js';

//*Steps
//1. connect Database
//2. Make Model
//3. 

const app = express();
const PORT = 8000;

app.use(express.json());
connectDB();
app.use("/api/",userRoute);

app.get("/",(req,res)=>{
    res.send("Hello world");
});


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})