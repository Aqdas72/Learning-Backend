import { createTask, deletetask, getById, getTask, markCompleted, updatetask } from "../services/task.service.js";

export const addTask = async (req, res) => {
    const {title,discription} = req.body;
    const task = await createTask(req.session.userId,title,discription);

    res.status(201).json({
        success:true,
        message:"Task added Successfuly",
        task:task
    });
}

export const getAllTasks = async (req, res) => {
    try {
        const task = await getTask(req.session.userId);

        res.status(200).json({
            success:true,
            AvailableTasks:task.length,
            task:task
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error occur while fetching"
        })
    }
}

export const getTaskById = async (req, res) => {
    const {id} = req.params;
    const userId = req.session.userId;

    try {
        const task = await getById(userId, id);
        console.log(task);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.status(200).json({
            success: true,
            task: {
                title: task.title,
                description: task.description,
                completed: task.completed
            }
        });

    } catch (error) {
        console.log("Error:",error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const updatedTask = await updatetask(id,body);

        res.status(200).json({
            success:true,
            task:updatedTask,
            message:"Task is updated successfuly"
        });


    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to update"
        })
    }
}
export const taskCompleted = async(req,res)=>{
    try {
        const taskId = req.params.id;
        const userId = req.session.userId;
        const task = await markCompleted(taskId, userId);

        if(!task){
            return res.status(404).json({
                success:false,
                message:"Task not found"
            })
        }

        res.status(200).json({
            success:true,
            message:"Task marked as complete",
            task:task
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to update"
        })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedtask = await deletetask(id);

        res.status(200).json({
            success:true,
            message:"Task is deleted successfuly",
            task:deletedtask.title
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to delete"
        })
    }
}