import crypto from "crypto";


export const generateToken = ()=>{
    return crypto.randomBytes(16).toString("hex");//those are bytes, so we convert them to readable text.
    // *create a 16 byte random text and then we convert it into readable data 
    // * 1byte = 2
}

export const validateToken = (token)=>{
    return token.length === 32;
}