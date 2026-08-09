const EventEmitter = require("events");

const Event = new EventEmitter();

Event.on("userRegistered",(name)=>{
    console.log(`Welcome ${name}`);
})
Event.on("userRegistered",(name)=>{
    console.log("Sending Email...")   
})
Event.on("userRegistered",(name)=>{
    console.log("Saving into Database...")
})
Event.emit("userRegistered","Aqdas");