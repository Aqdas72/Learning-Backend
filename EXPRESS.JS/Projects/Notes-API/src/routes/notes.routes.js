import { Router } from "express";
import { createNotes, deleteNote, readNotes, updateNotes } from "../controller/notes.controller.js";

const routes = Router();

//*CRUD operation
//*1create
routes.post("/",createNotes);
//*2 read
routes.get("/",readNotes);
//*3 update
routes.put("/:id",updateNotes);//!req.params.id
//*4 delete
routes.delete("/:id",deleteNote);//!req.params.id

export default routes;