import { Router } from "express";
import { profile, userLogin, userLogout, userRegister } from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const routes = Router();

//* Authentication API

//? register
routes.post("/register",userRegister);
//? login
routes.post("/login",userLogin);
//? profile 
routes.get("/profile", authMiddleware,profile);
//? logout
routes.post("/logout",userLogout);

export default routes;
