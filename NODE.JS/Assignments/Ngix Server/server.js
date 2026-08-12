const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3002;

const Server = http.createServer((req,res)=>{
    let filePath;
    if(req.url === "/"){
        filePath = path.join(__dirname,"index.html");
    } else{
        filePath = path.join(__dirname,req.url);
    }
    fs.readFile(filePath,(error,data)=>{
        if(error){
            res.writeHead(404,{
                "context-Type":"text/plain"
            });
            return res.end("File Not Found");
        }
        const extn = path.extname(filePath);
        let contentType = "text/plain";
        switch(extn){
            case ".html":
                contentType = "text/html";
                break;
            case ".css":
                contentType = "text/css";
                break;
            case ".js":
                contentType = "application/javascript";
                break;
        }
        res.writeHead(200,{
            "content-Type" : contentType,
        });
        res.end(data);
    })
})
Server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})