import express from 'express';
import Urlshortener from "./routes/url.routes.js"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/",Urlshortener);

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to URL Shortener");
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})