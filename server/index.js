import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserModel from "./Model/userModel.js"
import AuthenRouter from "./Routers/AuthenRouter.js"
import userRouter from "./Routers/userRouter.js"
import PostRouter from "./Routers/postRouter.js"
import ChatRouter from "./Routers/chatRouter.js"


dotenv.config();
const app=express();
//middleware
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

//routes
app.use('/api/auth',AuthenRouter)
app.use('/api/user',userRouter)
app.use("/api/post",PostRouter)
app.use("/api/chat",ChatRouter)
mongoose.connect(process.env.connectionString,
//{useNewUrlParser:true,useUnifiedTopology:true}
)
.then(()=>app.listen(process.env.PORT,()=>console.log("connected and start listening")))
.catch((error)=>console.log(error))