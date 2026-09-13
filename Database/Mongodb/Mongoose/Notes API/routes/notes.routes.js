import { Router } from "express";
import notesModel from "../model/notes.model.js";


// CRUD Operations
const routes = Router();
// Create a new note
routes.post("/notes",async (req, res) => {
    try {
        const note = new notesModel(req.body);
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all notes
routes.get("/notes",async (req, res) => {
    try {
        const notes = await notesModel.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }         
});    

// update a note by ID
routes.put("/update-notes/:id",async (req, res) => {
    try {
        const note = await notesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    }  
    catch (error) {     
        res.status(500).json({ message: error.message });
    }
});

// delete a note by ID
routes.delete("/delt-note/:id",async (req, res) => {

    try {
        const note = await notesModel.findByIdAndDelete(req.params.id);   
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }

})

export default routes;