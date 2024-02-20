//registeration to export

import UserModel from "../Model/userModel.js"
import bcrypt, { hash } from "bcrypt"

//register
export const register=async(req,res)=>{
    const{username,password,firstname,lastname}=req.body;

    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt)
    const newUser=new UserModel({username,password:hashedPassword,firstname,lastname})

    try {
        await newUser.save();
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
//Login
export const login=async(req,res)=>{
    const{username,password}=req.body;

    try {
        const user=await UserModel.findOne({username:username})

      
        if(user){
          const  toCheck=await bcrypt.compare(password,user.password)

            toCheck ? res.status(200).json(user):res.status(400).json("wrong password")
        }
        else{
            res.status(404).json("user not exist")
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}