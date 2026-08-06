const http = require('http');
const fs = require('fs');

const post = 3000;

const log = `${Date.now()} : is the unique id \n`

const myserver = http.createServer((request,response)=>{
    fs.appendFile("log.txt",log,(err)=>{
        if(err){
            console.error("Error found : ",err);
            response.statusCode = 500;
            response.end("Internal code error");
            return;
        }
        response.end("Hello world");
    })

})