import { Router } from "express";
import { createUser, deleteUser, getUser, getUserbyId, updateUser } from "../controller/user.controller.js";


const routes = Router();

//!CRUD operation 
//*create user
routes.post("/",createUser);
//*read users
routes.get("/",getUser);
//*get user by id
routes.get("/:id",getUserbyId)
//*update user
routes.put("/:id",updateUser);
//*delete user
routes.delete("/:id",deleteUser);

export default routes;