import express from "express"

const app = express();
const port = 8080;
//app.use(express.json())//inbuilt middleware

function sayHiMiddleware(req,res,next){
    console.log("Hello I am Middleware👋🏻");
}
//app.use(sayHiMiddleware); // global middleware


app.get("/",sayHiMiddleware,(req,res)=>{//specific middleware
    res.status(200).send("Hello");
})
app.get("/users",(req,res)=>{
    res.send("Hello User");
})

app.listen(port,()=>{
    console.log(`Port is running on ${port}`)
})
//1. global middleware
//2. specific route middleware
//3. inbuilt middleware