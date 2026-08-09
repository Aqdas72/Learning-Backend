const fs = require('fs');
const http = require("http");
const filepath = "./file.txt";
const pastepath = "./log.txt";
const port = 3001;

const Server = http.createServer((req,res)=>{
    if(req.url !== "/"){
        return res.end("404 Not Found");
    }


    console.log("URL:", req.url);
    console.log("Downloading Started")
    const readable = fs.createReadStream(filepath);
    const writeable = fs.createWriteStream(pastepath,{flags:"a"});
    readable.pipe(writeable);
    readable.on("end",()=>{
        console.log("Download Finished!");
        res.end("Download Finished!");
    })
})

Server.listen(port);
