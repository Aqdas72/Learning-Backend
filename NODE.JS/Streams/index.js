const fs = require("fs");
const { wrap } = require("module");

const read = fs.createReadStream("Sample.txt",{
    highWaterMark:10 //controls how big each chunk should be here it means chunk size should be 10bytes
})
read.on("data",(chunks)=>{
    console.log(chunks.toString());
})

//Customs Streams
const {Readable,Writable} = require("stream");

const readableStream = new Readable({
    highWaterMark:10,
    read() {}
});
const writeableStream = new Writable({
    write(StreamData){
        console.log("Writable Data...",StreamData.toString());
    }
})


readableStream.on("data",(chunks)=>{
    console.log("Readable Chunks:", chunks.toString());
    writeableStream.write(chunks);
});
console.log(readableStream.push("Hello"));
