const EventEmitter = require("events"); //EventEmitter - Build in class in node.js

const emitter = new EventEmitter(); // creating an Event Emitter object


//* keymethods -
// 1. on(eventname,listner) --- create 

emitter.on("Greet",(args)=>{
    console.log(`Hello my username and id is ${args.username} ,${args.id} in Course ${args.Course}`);
});

// 2. emit(eventname,[args]) --- execute
emitter.emit("Greet" ,{
    username:"Aqdas",
    id:Date.now(),
    Course:"B.Tech"
    });//Multiple Arguments



    // Example 2
emitter.on("Sum",(n)=>{
    sum=0;
    for(let i=1;i<=n;i++){
        sum = sum+i;
    }
    console.log(sum);
})
emitter.emit("Sum",5);

