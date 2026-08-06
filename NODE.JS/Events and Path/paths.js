const { type } = require('os');
const path = require('path');

//1. path.join() - joins the given path segments into a single path
const filepath = path.join(__dirname,"students.py");
console.log(filepath)
// __dirname - gives the absolute path of the current folder

const basname = path.basename(filepath); //path.basename() - returns the file name
const dir = path.dirname(filepath); //path.dirname() - returns the folder containing the file
const ext = path.extname(filepath); //path.extname() - returns the file extension 
const parse = path.parse(filepath); //path.parse() - break a path into its parts 
console.log({
    basname,
    dir,
    ext,
    parse
})
