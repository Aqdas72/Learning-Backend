import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname,"data","todo.json"); //* utils/todo.json

const loadTodo = ()=>{
    try {
        if(!fs.existsSync(filepath)){
            fs.mkdirSync(path.dirname(filepath),{recursive:true}); //?recursive: true tells fs.mkdirSync():
            //"Create the folder and also create any parent folders that don't exist.
            fs.writeFileSync(filepath,"[]","utf-8");
            return [];
        }
        const todos = fs.readFileSync(filepath,"utf-8");
        if (!todos.trim()) {
            return [];
        }
        return JSON.parse(todos);
        
    } catch (error) {
        console.error({message:"Error fetching data",error});
        return [];
    }
}

export const readfile = ()=>{
    const data = loadTodo();
    return data;
}
export const writefile = (todo)=>{
    fs.writeFileSync(
        filepath,
        JSON.stringify(todo,null,2),
        "utf-8"
    );
}
