const http = require("http");
const fs = require("fs");
const Port = 8080;

const server = http.createServer((req,res)=>{
    //? <----1----->
    //*1. Dowloading in a wrong way
    //const read = fs.readFileSync("Sample.txt");
    //res.end(read);

    //*2. Doing it in a right way Using 'STREAMS'
    //const readableStream = fs.createReadStream("Sample.txt");
    //readableStream.pipe(res);

    //? <-----2----->
    const readable = fs.createReadStream("Sample.txt");
    const writeable = fs.createWriteStream("Output.txt");
    readable.pipe(writeable);

    readable.on("data", (chunk) => {
        console.log(chunk);
    });
    readable.on("end", () => {
        res.end("File copied successfully!");
    });

    readable.on("error", (err) => {
        res.end("Error: " + err.message);
    });


});
//*streams - Read and write
//  readable<--- pipe --->writeable 
// res : readablestream
// req : writeablestream



server.listen(Port,()=>{
    console.log("Server is connected 😁")
})