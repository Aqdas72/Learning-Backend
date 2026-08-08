const fs = require('fs');

const filepath = "./file.txt";

if(fs.existsSync(filepath)){
    const data = fs.readFileSync(filepath,"utf-8");
    console.log(typeof(data)); // its return the String 
    console.log("Number of Characters : ",data.length);
    console.log("Number of Words      : ",data.split(" ").length); //split() - split the string using the specified seperator
    console.log("Number of Lines      : ",data.split("\n").length);
} else{
    console.log("File not found");
    return;
}