import { Router } from "express";
import { Addtodo, Deletetodo, filteringTodo, GetAlltodo, Markcompleted, Updatetodo } from "../controller/todo.controller.js";

const routes = Router();

//? CRUD operation
//* create todo
routes.post("/",Addtodo);
//* read todo
routes.get("/",GetAlltodo);
//* update todo
routes.put("/:id",Updatetodo);
//* Mark completed
routes.patch("/:id",Markcompleted);
//* delete todo
routes.delete("/:id",Deletetodo);
//*filtering Todo
routes.get("/filter",filteringTodo);

export default routes;