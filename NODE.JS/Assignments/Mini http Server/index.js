const http = require("http");

const port = 8080;

const Server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end("Welcome Home");
    } else if(req.url === "/about"){
        res.end("About Page");
    } else if(req.url === "/contact"){
        res.end("Contact Page");
    } else{
        res.statusCode = 404;
        res.end("404 Not Found");
    }
})

Server.listen(port,()=>{
    console.log("Server is Running");
});
