import { Router } from "express";
// Router - it is simply used to manage or organize routes
const router = Router(); //Now router work somewhat like app

router.get("/users",(req,res)=>{
    res.send("User Page😍");
})
router.get("/users/about",(req,res)=>{
    res.send("User About Page👌");
})
router.get("/users/:id",(req,res)=>{
    res.send({
        id:req.params.id
    })
})
export default router;