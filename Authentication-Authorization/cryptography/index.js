import express from "express";
import crypto from "crypto";
import { buffer } from "stream/consumers";

const app = express();
const port = 5000;

app.use(express.json());

//generate rsa key pair 
const generateKeyPair = ()=>{
    const {publicKey,privateKey} = crypto.generateKeyPairSync("rsa",{
        modulusLength:2048,
        publicKeyEncoding:{
            type:"pkcs1",
            format:"pem"
        },
        privateKeyEncoding:{
            type:"pkcs1",
            format:"pem"
        }
    })
    return {publicKey,privateKey};
}

//? Encryption
const encrypt = (publicKey,message)=>{
    const encrypted = crypto.publicEncrypt(publicKey,Buffer.from(message));
    return encrypted.toString("base64");
}

//? Decryption
const decrypt = (privateKey,encryptedMessage)=>{
    const decrypted = crypto.privateDecrypt(privateKey,Buffer.from(encryptedMessage,"base64"));
    return decrypted.toString("utf-8");
}

const keys = generateKeyPair();
const publicKey = keys.publicKey;
const privateKey = keys.privateKey;


app.get("/",(req,res)=>{
    res.send("Hello Aqdas");
})

app.post("/encrypt",(req,res)=>{
    const {message} = req.body;

    //operation for encryption
    const encryptedData = encrypt(publicKey,message);
    res.json({encryptedData});
});


app.post("/decrypt",(req,res)=>{
    const {encryptedMessage} = req.body;

    //operation for decryption
    const decryptedData = decrypt(privateKey,encryptedMessage);

    res.json({decryptedData})

})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
    console.log(`publicKey: \n`,publicKey);
    console.log(`privateKey: \n`,privateKey);
})