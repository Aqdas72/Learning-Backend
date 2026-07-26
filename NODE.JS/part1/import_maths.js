//require - it is a function which import the code from another file into current file
const math = require("./math");

console.log("sum of two number is : " + math.addfunc(10,2),"\nremainder of 2 number is : "+math.remainderfun(10,3));