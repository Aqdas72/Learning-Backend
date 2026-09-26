import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import session from "express-session";
dotenv.config();

import authRoutes from "./routes/auth.routes.js"
import adminRoutes from "./routes/admin.routes.js"
import productsRoutes from "./routes/products.routes.js"
import orderRoutes from "./routes/order.routes.js"

const app = express();
const PORT = process.env.PORT || 3000;

//global middleware
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

//connecting to database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log(`MongoDB connected`)})
.catch((err)=>{console.log(`MongoDB connection error`,err.message)})

//routes
app.use("/auth",authRoutes);
app.use("/admin",adminRoutes);
app.use("/products",productsRoutes);
app.use("/order",orderRoutes);
//app.use("/order",orderRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the E-Commerce API!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});