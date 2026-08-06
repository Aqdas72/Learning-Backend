// Assigment 1

//? 4 Multiple type of user event - login logout purchase and profile update
//? Track the event how time its emitted
//? PLOGS A SUMMARY OF ALL EVENTS OCCURRENCES WHEN A SPECIAL SUMMARRY EVENT IS TRIGGERED

const EventEmitted = require("events");
const fs = require("fs");
const EmitUser= new EventEmitted();

const eventCount = {
    Login:0,
    Logout:0,
    Purchase:0,
    Update:0
}
const eventCountFile = "EventCount.json";
//Load previous count from json file
if(fs.existsSync(eventCountFile)){
    const data = fs.readFileSync(eventCountFile,"utf8");
    Object.assign(eventCount,JSON.parse(data));
    //eventCount - Target Object
    // JSON.parse(data) - Given Object
//assign - copy the properties of Given Object to target object and the return the target object
}
function saveCount() {
    fs.writeFileSync(eventCountFile,JSON.stringify(eventCount,null,2));
}

//Login
EmitUser.on("Login",(usernames)=>{
    eventCount.Login++;
    console.log(`${usernames} Login Successfully😁`);
    saveCount();
});

//Purchase
EmitUser.on("Purchase",(amount,username)=>{
    eventCount.Purchase++;
    console.log(`${username} purchased amount total is : `,amount);
    saveCount();
});

//Logout
EmitUser.on("Logout",(id)=>{
    eventCount.Logout++;
    console.log(`${id} is Logout Successfully`);
    saveCount();
});
//Profile Update
EmitUser.on("Profile Update",(username,field)=>{
    eventCount.Update++;
    console.log(`${username}'s ${field} is updated successfully`);
    saveCount();
})


// <--- Event Execution --->
EmitUser.emit("Login","Aqdas");
EmitUser.emit("Purchase",5000,"Aqdas");
EmitUser.emit("Logout",Date.now());
EmitUser.emit("Profile Update","Aqdas","Email");
EmitUser.emit("Login","Twinkle");
EmitUser.emit("Purchase",10000,"Twinkle");

// <--- Event Count --->
EmitUser.on("Event Count",()=>{
    console.log("<--Event Count-->");
    console.log("Login:", eventCount.Login);
    console.log("Purchase:", eventCount.Purchase);
    console.log("Logout:", eventCount.Logout);
    console.log("Profile Update:", eventCount.Update);
});

EmitUser.emit("Event Count");