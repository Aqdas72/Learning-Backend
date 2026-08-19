import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";


const app = express();
app.use(
    session({
        secret:"mysecretkey",
        resave:false,
        saveUninitialized:false,
        cookie:{
            maxAge:1000*60*60*24, //1 day
        }
    }));
app.use(cookieParser());
app.get("/",(req,res)=>{
    console.log(req.session);
    console.log(req.session.id);
    res.send("Hello World")
})

app.get("/login",(req,res)=>{
    req.session.user = {
        name:"Aqdas",
        id:12,
        age:21
    }
    res.send(`user is created ${req.session.user.name}`);
})
app.get("/dashboard",(req,res)=>{
    if(req.session.user){
        res.send(`Welcome ${req.session.user.name}`);
    } else{
        res.send("please login")
    }
})

app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.send("Logout")
})



app.listen(3000,()=>{
    console.log(`server is running on 3000`);
})
