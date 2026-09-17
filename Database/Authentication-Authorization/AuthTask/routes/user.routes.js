import {Router} from "express";
import { login, logout, signup } from "../controller/user.controller.js";


const routes = Router();

// for user - login ,logout , register new user 
routes.post("/signup",signup);
routes.post("/login",login);
routes.post("/logout",logout);


export default routes