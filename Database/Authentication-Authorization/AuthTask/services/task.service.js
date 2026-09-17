import mongoose from "mongoose";
import { taskModel } from "../model/task.model.js";
5
export const createTask = async (userId,title,description)=>{
    const task = new taskModel({userId,title,description});
    return task.save();
}

export const getTask = async (userId)=>{
    const task = await taskModel.find({userId},{__v:0});
    return task;
}

export const getById = async (userId, taskId) => {
    const task = await taskModel.findOne({
        _id: taskId,
        userId: userId
    });
    return task;
};

export const updatetask = async(taskId,body)=>{
    const updatedtask = await taskModel.findByIdAndUpdate(taskId,body,{new:true});
    return updatedtask;
}

export const markCompleted = async(taskId, userId)=>{
    const task = await taskModel.findOneAndUpdate(
        {
            _id:taskId,
            userId:userId
        },
        {
            completed:true
        },
        {new:true}
    )
    return task
}

export const deletetask = async(taskId)=>{
    const deletedtask = await taskModel.findByIdAndDelete(taskId);
    return deletedtask;
}