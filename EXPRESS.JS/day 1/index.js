import express from "express";
import userData from "./data/data.js";
import fs from "fs";
import { error } from "console";

// Middleware to parse JSON bodies

const app = express();
app.use(express.json());
const port = 3001;

//**1 */ GET Query - (It is for getting data from server)
app.get("/", (req, res) => {
    res.send("Hello world hh");
});

//**2 */ req.params - identify a specific resource (URL - /users/101/Aqdas)  
app.get("/api/v1/users/:id/:name",(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const {name} = req.params;
    console.log(typeof(id));
    const user = userData.find((user)=>{
        return user.name === name;
    });
    console.log(user);
    res.send(user);
})


//* req.query - used to filter,search,sort (URL - users/search?subject=Math)
app.get("/users/search",(req,res)=>{
    const {subject} = req.query; //req.query is an object type where the incoming data is String
    const user = userData.filter((user)=>{
        return user.subject === subject;
    })
    res.send(user)
})

//**3 */ POST Query - (It is for sending data to server)
app.post("/users",(req,res)=>{
    const {name,displayName} = req.body;
    // check -> exist -> read the file -> parse it -> push new data -> write it back to file
    // if not exist -> return []
    const newUser = {
        id:userData.length + 1,
        name:name,
        displayName:displayName,
    }
    userData.push(newUser);
    res.status(201).send({
        message:"User is Created",
        data:newUser
    })

})
app.get("/users",(req,res)=>{
    res.send(userData)
})
 
//**4 */ PUT Query - (to update all field data)
app.put("/users/:id",(req,res)=>{ 
    const {
        params:{id},
        body,
    } = req;
    const userIndex = userData.findIndex(user => user.id === parseInt(id));
    //findIndex - finds the index of array or object and return -1  if not found
    if(userIndex === -1){
        res.status(404).send({
            status:404,
            message:"Element Not Found",
        })
        return;
    }
    userData[userIndex]={
        ...userData[userIndex],...body,
    }
    res.status(201).send(
        {
            message:"User Updated",
            data:userData[userIndex],
        }
    )
});

//**5 */ PATCH Query - (It is for updating specefic field data to server)
app.patch("/users/:id",(req,res)=>{
    const {
        params:{id},
        body,
    } = req;
    const userIndex = userData.findIndex(user => user.id === parseInt(id));
    //findIndex - finds the index of array or object and return -1  if not found
    if(userIndex === -1){
        res.status(404).send({
            status:404,
            message:"Element Not Found",
        })
        return;
    }
    // Here it makes the code diff from PUT
    userData[userIndex]={
        ...userData[userIndex],...body,
    }
    res.status(201).send(
        {
            message:"User Updated",
            data:userData[userIndex],
        }
    )
});


//**6 */ DELETE Query - ()

app.delete("/users/:id",(req,res)=>{
    const {id} = req.params;
    const userIndex = userData.findIndex((user)=>{
        return user.id === parseInt(id);
    })
    if(userIndex === -1){
        return res.status(404).send({
            message:"User Not Found"
        })
    }
    res.status(201).send({
        message:"User Deleted Successfuly",
        data:userData.splice(userIndex,1),
        //splice(StartIndex,Deletecount(how many element to delete))
    })
})
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});