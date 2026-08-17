import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use("/api/v1",userRoutes); //Here /api/v1 + /users
//middleware  (Request -> middleware -> Route found ->Response)
/**
Client
  ↓
GET /users
  ↓
app.use(userRoutes)
  ↓
userRoutes
  ↓
router.get("/users")
  ↓
res.send("All Users")
  ↓
Client
 */
const port = 8080;

app.get("/",(req,res)=>{
    res.send("Hello User 😁");
})

app.listen(port,()=>{
    console.log(`Port is running on ${port}`)
})
