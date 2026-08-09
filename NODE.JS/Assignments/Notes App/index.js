const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"notes.json");


//          Load Data
function loadData(){
    try {
        if(fs.existsSync(filePath)){
            const Data = fs.readFileSync(filePath,"utf-8"); //o/p - String
            const json = JSON.parse(Data);//convert the json into js object
            if (!json.notes || !Array.isArray(json.notes)) {
                return {
                    nextId: 1,
                    notes: []
                };
            }
            if(json.notes.length === 0){
                return {
                    nextId: 1,
                    notes: []
                };
            }
        return json;
    }
    const data = {
        nextId:1,
        notes:[],
    }
    return data;   
    } catch (error) {
        console.log("Error Occured Why reading the file",error);
        return {
            nextId: 1,
            notes: []
};
    }
}

function saveData(data){
    fs.writeFileSync(filePath,JSON.stringify(data,null,2));
}

//          Add Note
function AddNote(argument){
    const load = loadData(); // O/p - js Object/array
    load.notes.push({
        id:load.nextId,
        data:argument,
    })
    load.nextId++;
    saveData(load);

}


//              UPDATE
function updateData(id,argument){
    const load = loadData();
    if(!id || !argument){
        console.log("Please Provide a valid id and note");
        return;
    }
    for(const Data of load.notes){
        if(Data.id == id){
            Data.data = argument;
            saveData(load);

            console.log("Note Updated Successfully");
            return;
        }
    }
    console.log("Note not found.");
}


//          Show List
function showList(){
    const load = loadData();
    if (load.notes.length === 0) {
        console.log("No Notes Found.");
        return;
    }
    for(const value of load.notes){
        console.log(`task ${value.id} :  ${value.data}`);
    }
}

//          Remove Note 
function removeNote(id){
    const load = loadData();
    const updatedNotes = load.notes.filter(note => note.id != id);
    if (updatedNotes.length === load.notes.length) {
        console.log("Note not found.");
        return;
    }
    load.notes = updatedNotes;
    saveData(load);
    console.log("Note Removed Successfully");
}



const command = process.argv[2];
const argument = process.argv.slice(3).join(" ");
// add remove list update
if(command == "add" && !argument){
    console.log("Please Provide a Note");
    return;
} else if(command == "add"){
    console.log("Adding Note:", argument);
    AddNote(argument);   
} else if(command == "update"){
    updateData(process.argv[3],process.argv.slice(4).join(" "));
} else if(command == "list"){
    showList();
} else if(command == "remove"){
    removeNote(process.argv[3]);
} else{
    console.log("No Command Passed");
    return;
}
