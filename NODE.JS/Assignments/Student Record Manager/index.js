const fs = require('fs');
const StudentData = "student.json";

function loadfile(){
    try{
        if(fs.existsSync(StudentData)){
            const ReadData = fs.readFileSync(StudentData,"utf-8");
            const json = JSON.parse(ReadData); //convert the json into js object
            if (!Array.isArray(json)) { // Check if the parsed data is an array
                return [];
        }

        return json;
        }
        return []; // Return an empty array if the file doesn't exist
    } catch (error) {
        console.error("Error reading file:", error);
        return [];
    }
}

//              LIST    
function Studentfile(){
    const Students = loadfile();
    if(Students.length === 0){
        console.log("No students found.");
        return ;
    }
    let i=1;
    for(const Student of Students){
        console.log(`${i}.\n Name      : ${Student.name}\n Roll No   : ${Student.rollno}\n Course    : ${Student.course}`);
        i++;
    }
}

//              ADD
function saveStudentData(load){
    const updated = JSON.stringify(load, null, 2);
    fs.writeFileSync(StudentData,updated);
}
function addStudentData(Data){
    const load = loadfile();
    //console.log(load) -> [{name: "Aqdas", rollno: "102", course: "CSE"}]
    //Adding Data to the array
    load.push(Data);
    saveStudentData(load);
    console.log("Data added successfully:", Data);
}


//              DELETE
function DeleteStudentData(Data){
    const Students = loadfile();
    if(Students.length === 0){
        return;

    }
    const updatedStudents = Students.filter(
        (student) => student.rollno !== Data
    );

    if (updatedStudents.length === Students.length) {
        console.log("Student not found.");
        return;
    }

    saveStudentData(updatedStudents);
    console.log("Student deleted successfully.");
}

//             SEARCH

function SearchStudent(Data){
    const Students = loadfile();
    if(Students.length === 0){
        console.log("No students found.");
        return;
    }
    for(const Student of Students){
        if(Student.name === Data){
            console.log("Student found:", Student.name, Student.rollno, Student.course);
            return;
        }
    }
    console.log("Student not found");

}

const command = process.argv[2];
const Data = {
    name : process.argv[3],
    rollno : process.argv[4],
    course : process.argv[5]
}

if(command == "add"){
    addStudentData(Data);
} else if(command == "list"){
    Studentfile();
} else if(command == "delete"){
    DeleteStudentData(process.argv[3]);
} else if(command == "search"){
    SearchStudent(Data.name);
} else{
    console.log("Command not found");
}