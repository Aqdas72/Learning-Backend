import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logMiddleWare = (req,res,next)=>{
    const Log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
    const Logfile = path.join(__dirname,"../logs/request.log");

    fs.appendFile(Logfile,Log,(err)=>{
        if(err) console.error(`Failed to log request`,err);
    })
    next();
}

export default logMiddleWare;
