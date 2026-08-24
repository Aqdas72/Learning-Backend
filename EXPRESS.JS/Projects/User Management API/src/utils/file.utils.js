import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname,"data","userData.json");

const loadData = ()=>{
    try {
        if(!fs.existsSync(filepath)){
            fs.mkdirSync(path.dirname(filepath),{recursive:true});
            fs.writeFileSync(filepath,"[]","utf-8");
            return [];
        }
        const data = fs.readFileSync(filepath,"utf-8");
        return JSON.parse(data);

    } catch (error) {
        console.error("Error while fetching userData",error);
        return [];
    }
}

export const readfile = ()=>{
    const userData = loadData();
    return userData;
}

export const writefile = (User) =>{
    fs.writeFileSync(
        filepath,
        JSON.stringify(User,null,2),
        "utf-8"
    )
}