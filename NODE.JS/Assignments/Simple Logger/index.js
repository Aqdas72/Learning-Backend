const fs = require('fs');
const filePath = "logs.txt";
function ReadMsg(){
    if(fs.existsSync(filePath)){
        const Read = fs.readFileSync(filePath,"utf-8");
        console.log(Read);
        return;
    }
    return;

}
function AddMsg(Msg){
    const date = new Date();
    const TodaysDate = date.getDate();
    const Month = date.getMonth() + 1;
    const Year = date.getFullYear();
    let Time = date.getHours();
    if (Time > 12){
        Time = Time - 12;
    } else if (Time === 0){
        Time = 12;
    }
    fs.appendFileSync(filePath,`[${TodaysDate.toString().padStart(2,"0")}/${Month.toString().padStart(2,"0")}/${Year} ${Time}:${date.getMinutes().toString().padStart(2,"0")} ${date.getHours() >= 12 ? 'PM' : 'AM'}] - ${Msg}\n`)
    //padStart(length, character) means:If the string is shorter than length, add character at the beginning until it reaches that length.
}
const command = process.argv.slice(2).join(" ");
if(!command){
    console.log("Please Provide a Message");
    return;
}
AddMsg(command);
ReadMsg();