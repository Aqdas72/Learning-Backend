import { readfile, writefile } from "../utils/file.utils.js";
//?
export const createUser = async(req,res)=>{
    const {name,email,age} = req.body;
    /*
     * {
     *      userId:
     *      name:
     *      email:
     *      age:
     * }
     */
    if (
        !name ||
        !email ||
        !age ||
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof age !== "number") {
            return res.status(400).json({
                message: "Please provide valid user data"
            });
    }
    const userData = await readfile();
    const newuserData = {
        userId:Date.now(),
        name,
        email,
        age,
    }
    userData.push(newuserData);
    writefile(userData);
    res.status(201).json({
        message:"User added Successfuly",
        user:newuserData,
    })
}
//?
export const getUser = (req,res)=>{
    const userData = readfile();
    if(!userData || userData.length === 0){
        return res.status(404).json({message:"No user data available"});
    }
    res.status(200).json({userData});
}
export const getUserbyId = (req,res)=>{
    const {id} = req.params;
    //*console.log(Number(id));
    const userData = readfile();
    const foundUser = userData.find((data)=>data.userId === Number(id));
    if(!foundUser){
        return res.status(404).json({message:"User Not Found"});
    }
    res.status(200).json({
        message:"User Found",
        user:foundUser,
    })
}
export const updateUser = (req,res)=>{
    const {
        params:{id},
        body
    } = req;
    const userData = readfile();
    const userIndex = userData.findIndex((data)=>data.userId === Number(id));
    if(userIndex === -1){
        return res.status(404).json({
            message:"No such user to update"
        })
    }
    userData[userIndex] = {
        ...userData[userIndex],
        ...body,
    }
    writefile(userData);
    res.status(200).json({
        message:"User is Updated successfuly",
        updatedUser:userData[userIndex],
    })
}
export const deleteUser = (req,res)=>{
    const {id} = req.params;
    const userData = readfile();
    const userIndex = userData.findIndex((data)=>data.userId === Number(id));
    if(userIndex === -1){
        return res.status(404).json({
            message:"User Not Found",
        })
    }
    const deletedUser = userData[userIndex];
    userData.splice(userIndex,1);
    writefile(userData);
    res.status(200).json({
        message:"user deleted successfuly",
        deletedUser,
    })
}