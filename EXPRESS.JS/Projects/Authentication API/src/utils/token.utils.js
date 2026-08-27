import crypto from 'crypto';

export const Generatetoken = ()=>{
    return crypto.randomBytes(32).toString("Hex");
}
export const verifyToken = (token)=>{
    if(!token){
        return false;
    }
    return token.length === 64;
}