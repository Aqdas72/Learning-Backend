const http = require("http");
const fs = require("fs");
const Port = 8080;
const path = require("path");
const read = path.join(__dirname,"Sample.txt");
const write = path.join(__dirname,"Output.txt");

const server = http.createServer((req,res)=>{
    //? <----1----->
    //*1. Dowloading in a wrong way
    //const read = fs.readFileSync("Sample.txt");
    //res.end(read);

    //*2. Doing it in a right way Using 'STREAMS'
    //const readableStream = fs.createReadStream("Sample.txt");
    //readableStream.pipe(res);

    //? <-----2-----> Creating and Reading a file using streams

    const readable = fs.createReadStream(read);
    const writeable = fs.createWriteStream(write);
    readable.pipe(writeable); // copy Sample.txt --> Output.txt

    readable.on("data", (chunk) => {
        console.log(chunk);
    });
    readable.on("end", () => {
        res.end("File copied successfully!");
    });

    readable.on("error", (err) => {
        res.end("Error: " + err.message);
    });
     
    //? <-----3-----> TRANSFORM STREAMS
    //task-- uppercase() , impulse -> Aqdas
    readable.on("data", (chunk) => {
        const modifiedChunk = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "Aqdas");
        writeable.write(modifiedChunk);
    });


});
//*streams - Read and write
//  readable<--- pipe --->writeable 
// res : readablestream
// req : writeablestream




server.listen(Port,()=>{
    console.log("Server is connected 😁")
})