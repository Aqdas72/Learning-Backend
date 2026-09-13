import express from "express";
import ConnectDB from "./config/db.js";
import productRoutes from "./routes/product.routes.js"
const app = express();
const Port = 3000;

app.use(express.json());
// connecting to MongoDB
ConnectDB();

app.use("/api/",productRoutes);


app.get("/",(req,res)=>{
    res.send("Welcome to the Product Inventory Management App");
})

app.listen(Port,()=>{
    console.log(`Server is running on ${Port}`);
})