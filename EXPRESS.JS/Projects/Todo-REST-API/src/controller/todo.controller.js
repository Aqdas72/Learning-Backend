import { readfile,writefile } from "../utils/file.utils.js";

//* Add Todo
export const Addtodo = async(req,res)=>{
    const {data} = req.body;
    if(!data){
        return res.status(404).json({message:"Please provide a data"})
    }
    const Tododata = await readfile();
    const addTodo = {
        id:Date.now(),
        data,
        completed:false,
    }
    Tododata.push(addTodo);
    writefile(Tododata);
    res.status(201).json({
        messsage:"Todo is Added",
        data:addTodo,
    })
}
//* get Todo
export const GetAlltodo = async(req,res)=>{
    const Tododata = await readfile();
    if (!Tododata || Tododata.length === 0) {
        return res.status(404).json({
            message: "No data available"
    });
}
    res.status(200).json({
        Tododata,
    })
}
//* Update Todo
export const Updatetodo = async(req,res)=>{
    const {id} = req.params;
    const {body} = req;
    const Tododata = await readfile();
    //* updation using findIndex() + spread
    /*const todoIndex = Tododata.findIndex((todo)=>todo.id === Number(id));
    Tododata[todoIndex] = {
        ...Tododata[todoIndex],
        ...body
    }*/
    //* updation using find(){return the first match element} + object.assign()
    const todo = Tododata.find((data) => data.id === Number(id));
    if (!todo) {
    return res.status(404).json({
        message: "Todo not found"
    });
}
    Object.assign(todo,req.body);
    writefile(Tododata);
    res.status(200).json({
        message:"Todo is updated successfuly",
        data:todo,
    })
}
//* Markscomplete Todo using PATCH
export const Markcompleted = async(req,res)=>{
    const {id} = req.params;
    const Tododata = await readfile();
    const todo = Tododata.find((data)=>data.id === Number(id));
    todo.completed = true;
    writefile(Tododata);
    res.status(200).json({
        message:"Task is completed",
        data:todo,
    })
}
//* Delete Todo
export const Deletetodo = async(req,res)=>{
    const {id} = req.params;
    const Tododata = await readfile();
    const todoIndex = Tododata.findIndex((todo)=>todo.id === Number(id));
    const deleteTodo = Tododata.splice(todoIndex,1);
    writefile(Tododata);
    res.status(200).json({
        message:"Todo is deleted Successfuly",
        data:deleteTodo,
    })
}
//* Filtering Todo
export const filteringTodo = async (req, res) => {
    const todos = await readfile();
    const completed = req.query.completed;

    if (completed === undefined) {
        return res.status(200).json(todos);
    }
    const filteredTodos = todos.filter(
        todo => todo.completed === (completed === "true")
    );

    res.status(200).json(filteredTodos);
};