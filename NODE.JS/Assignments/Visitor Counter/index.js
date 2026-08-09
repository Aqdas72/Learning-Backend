/*
Every time someone visits /

Increase the count.

Store it inside - "visitor.json"
Example:

{
  "count": 45
}

When visiting "/count"

Return -  Total Visitors : 45 */


const fs = require("fs");
const http = require("http");
const path = require("path");
const filePath = path.join(__dirname, "visitor.json"); //create a file in a same directory
function loadfile(){
    try {
        if(fs.existsSync(filePath)){
            const read = fs.readFileSync(filePath,"utf-8");
            return JSON.parse(read); // return js object
        }
        return {
            count:0,
        }
        
    } catch (error) {
        console.log(error,"Error Occured");
        
    }
}

const Server = http.createServer((req,res)=>{
    if(req.url === "/"){
        const load = loadfile(); //gets the js object from the file
        load.count++; // increment the count
        fs.writeFileSync(filePath,JSON.stringify(load, null,2));
        console.log(`Visitor count incremented to ${load.count}`);
        res.end("Visitor count incremented");
    } else if(req.url === "/count"){
        const load = loadfile();
        console.log(`Current visitor count: ${load.count}`);
        res.end(`Total Visitors: ${load.count}`);
    } else{
        res.statusCode = 404;
        res.end("Invalid URL");
    }
});

Server.listen(3000,()=> {
    console.log("Server is running on port 3000");
})
