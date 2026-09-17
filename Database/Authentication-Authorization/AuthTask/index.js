import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import session from "express-session";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

//* Routes
app.use(express.json());


//session config
app.use(session({
    secret:process.env.SESSION_SECERET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:600000,
        httpOnly:true
    }
})
)
app.use("/api/user",userRoutes)
app.use("/api/task",taskRoutes)

//* Home Page 
app.get("/", (req, res) => {
    res.send("Hello User");
});


connectDB() //it return the promises
.then(()=>{
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch((error)=>{
    console.log("Error connecting to Database ",error.message);
})
