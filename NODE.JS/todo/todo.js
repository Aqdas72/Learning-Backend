const fs = require('fs');

const filePath = ".tasks.json";

const loadTask = () =>{
    try {
        const data = fs.readFileSync(filePath);
        const JsonData = data.toString();
        return JSON.parse(JsonData);
    } catch (error) {
        return []
    }
}

function saveTask(load){
    const data2 = JSON.stringify(load);
    fs.writeFileSync(filePath,data2);
}
const addTask = (task) => {
    const load = loadTask();
    load.push(task);
    saveTask(load);
    console.log("Task saved: ",task);
}

const command = process.argv[2];
const argument = process.argv[3];

if(command === "add"){
    addTask(argument);
} else if(command === "list"){
    listTask();
} else if(command === "remove"){
    removeTask();
} else {
    console.log("command not found!");
}