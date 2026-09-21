import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';


import authRoutes from "./routes/auth.routes.js"
import privateRoutes from "./routes/private.routes.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//* connect mongodb
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log(`MongoDB connected`)})
.catch((err)=>{console.log(`MongoDB connection error`,err.message)})

//* Routes
app.use("/auth",authRoutes);
app.use("/private",privateRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



//authentication routes (signup and login)
//private routes (jwt(authenticate))