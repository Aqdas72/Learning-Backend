import express from "express";
import publicRoutes from "./routes/public.routes.js";
import privateRoutes from "./routes/private.routes.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url"; //*Because we are using ES Module 
//* In ES Module there is no __filename,__dirname So We create them ourself

import logMiddleWare from "./middleware/log.middleware.js"

const app = express();
const PORT = 3000;


//!STEP 2
// ? Check here if the log file exist or not if not create one
const __filename = fileURLToPath(import.meta.url);//*import.meta.url give you the current file location
const __dirname = path.dirname(__filename);//* return current dir 

console.log(__dirname);//? C:\CODING\WEB DEVELOPMENT\BACKEND\EXPRESS.JS\miniproject

if(!fs.existsSync(path.join(__dirname,"logs"))){
    fs.mkdirSync(path.join(__dirname,"logs"))
}


// *Inbuilt Middleware
app.use(express.json());

//! Global Middleware --> STEP 3
app.use(logMiddleWare);

//* Middleware to routes --> STEP 1
app.use("/public",publicRoutes); // ?first this middle ware work 
// ? public (2 Routes) - Generate-token , Home
app.use("/private",privateRoutes);
//? private(1 Route) - Dashboard



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost/${PORT}`);
})