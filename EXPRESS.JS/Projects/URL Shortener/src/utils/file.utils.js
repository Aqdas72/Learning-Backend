import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname,"data","file.json");

const loadData = ()=>{
    try {
        if(!fs.existsSync(filepath)){
            fs.mkdirSync(path.dirname(filepath),{recursive:true});
            fs.writeFileSync(filepath,"[]","utf-8");
            return [];
        }
        const read = fs.readFileSync(filepath,"utf-8");
        return JSON.parse(read);

    } catch (error) {
        console.error("Error fetchinf the file",error);
        return [];
    }
}
export const readfile = ()=>{
    const data = loadData();
    return data;
}
export const writefile = (data)=>{
    fs.writeFileSync(
        filepath,
        JSON.stringify(data,null,2),
        "utf-8",
    )
}
