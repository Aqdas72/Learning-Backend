import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
const PORT = 3000;


app.get("/",(req,res)=>{
    // ! How to set cookie
    // * res.cookie(key,value,{optional object --> 
    //  MaxAge(count in milliseconds),
    //  })
    res.cookie("name","Aqdas");
    res.cookie("userID","123");
    res.send("Hello User");
})

app.get("/product",(req,res)=>{

    //console.log(req.cookies); // undefined (before importing cookieparser)
    //console.log(req.header.cookie) // name=Aqdas (String)

    console.log("cookies :",JSON.stringify(req.cookies)); //* o/p - { userID: '123' } now it is in object
    console.log("cookies :",req.cookies)
    if(req.cookies.name && req.cookies.name === "Aqdas"){
        res.status(200).send({
            id:1,
            product:"PS5",
            price:"$500"
        })
    }
    else{
        res.send("Can't access this profile");
    }
})

app.get("/delete-cookie",(req,res)=>{
    res.clearCookie('userID');
    res.send("Cookie is deleted");
})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})