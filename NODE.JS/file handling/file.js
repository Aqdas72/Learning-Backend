const fs = require("fs");


//         WRITE
//?fs.writeFileSync("write.txt","Hello world");

//          ASYNC WRITE
//?fs.writeFile("write.txt","updated Hello world",(err)=>{
    //if(err){
      //  console.log(err);
    //}
//});

//          READ

//?const readfile = fs.readFileSync("write.txt","utf-8");
//?console.log(readfile);

fs.readFile("write.txt","utf-8",(error,responce)=>{
    if(error){
        console.log("NO FILE FOUND");
    }
    else{
        console.log(responce);
    }
})


//          APPEND

//?fs.appendFileSync("write.txt"," Appended text to this file on : ");
//?fs.appendFileSync("write.txt", new Date().toDateString());

/*fs.appendFile("appendInAsync.txt",`Hello Everyone i am aqdas and today's date is : ${new Date().toDateString()}`,(error,res)=>{
    if(error){console.log(error);}
    else{
        console.log(res)
}
});*/


//          DELETE

fs.unlink("write.txt",(err)=>{
    if(err){
        console.log("file already deleted");
        return;
    }
    console.log("File deleted successfuly")
})


//          COPY
fs.cp("appendInAsync.txt","file2.txt",(err)=>{
    if(err){console.log('Error')}
    console.log("File copied");
});


//          MAKE FOLDER
//?fs.mkdirSync("sync");
//console.log("folder created");

fs.stat("sync",(err,res)=>{
    if(err){console.log(err)}

    else{console.log(res)}

})

const os = require("os");
console.log(os.cpus().length)