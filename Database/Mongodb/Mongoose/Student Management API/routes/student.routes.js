import { Router } from "express";
import studentModel from "../model/student.model.js";

const routes = Router();

//?CRUD operation

// /api/students/
//*Create
routes.post("/students", async(req,res)=>{
    try {
        const {body} = req;
        const student = await studentModel.create(body);

        res.status(201).json({
            success:true,
            message:"Student created successfully",
            student
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:`${error}`
        })
    }
})

//*Read

routes.get("/students",async(req,res)=>{
    try {
        const students = await studentModel.find();

        res.status(200).json({
            success: true,
            message: "Students fetched successfully",
            count: students.length,
            data: students
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})

//*Update

routes.put("/students/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const updatedStudent = await studentModel.findByIdAndUpdate(
            id,
            body,
            { new: true }
        );
        if (!updatedStudent) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: updatedStudent
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

//*Delete
routes.delete("/students/:id", async(req,res)=>{
    try {
        const { id } = req.params;

        const deletedStudent = await studentModel.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
            Student: deletedStudent.name
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

export default routes;