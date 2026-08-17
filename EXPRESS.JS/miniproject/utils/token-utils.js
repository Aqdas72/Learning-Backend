import crypto from "crypto";


export const generateToken = ()=>{
    return crypto.randomBytes(16).toString("hex");//those are bytes, so we convert them to readable text.
}

export const validateToken = (token)=>{
    return token.length === 32;
}