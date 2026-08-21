import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname,"file.json");


const dataread = () => {
    try {
        // If file doesn't exist, create it with an empty array
        if (!fs.existsSync(filepath)) {
            fs.writeFileSync(filepath, "[]", "utf-8");
            return [];
        }

        const data = fs.readFileSync(filepath, "utf-8");

        // If file is empty
        if (!data.trim()) {
            return [];
        }

        return JSON.parse(data);

    } catch (error) {
        console.error("Error reading file:", error);
        return [];
    }
};
//*Reading file data
export const readfile = ()=>{
    return dataread();
}

export const writefile = (notes)=>{
    fs.writeFileSync(
        filepath,
        JSON.stringify(notes,null,2),
        "utf-8",
    );
}

