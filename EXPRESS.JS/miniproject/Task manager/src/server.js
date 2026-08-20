//Global imports
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";


//Local imports
import authRoute from "./routes/auth.routes.js";
import taskRoute from "./routes/task.routes.js";

const app = express();
const PORT = 8080;

//Global middleware
app.use(express.json());
app.use(
    session({
        secret:"your-secret-key",
        resave:false,
        saveUninitialized:false,
        cookie:{
            httpOnly:true,
            secure:false,
            maxAge:1000*60*60*24, //1 Day
        }
    })
)
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("Welcome to Task Manager📔");
})

//Custom middleware
app.use("/auth",authRoute);//to authenticate user to login and logout
app.use("/task",taskRoute);//to initiate a task to a user


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})