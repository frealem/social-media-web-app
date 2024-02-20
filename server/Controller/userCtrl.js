import UserModel from "../Model/userModel.js";
import bcrypt from "bcrypt"
export const getUser=async(req,res)=>{
    const id=req.params.id;
    

    try {
        const user=await UserModel.findById(id);
        if (user){const {password,...otherDetails}=user._doc;
            res.status(200).json(otherDetails);
        }
        else{
            res.status(404).json("user not found")
        }
    } catch (error) {
        res.status(500).json(error)
    }}

    //update
export const update=async(req,res)=>{
    const id=req.params.id;
    const{currentuserid,currentadminstatus,password}=req.body;

    try {
        if(currentuserid===id||currentadminstatus){

            if(password){
                const salt=await bcrypt.genSalt(10);
                req.body.password=await bcrypt.hash(password,salt);
            }
            const user=await UserModel.findByIdAndUpdate(id,req.body,{new:true})
                res.status(200).json(user)
               
        }
    } catch (error) {
        res.status(500).json(error);
    }
}    

//delete
export const deleteUser=async(req,res)=>{

    const id=req.params.id;
    const{currentuserid,currentadminstatus}=req.body;

   
        if(currentuserid===id||currentadminstatus){

            try {
                await UserModel.findByIdAndDelete(id)
                res.status(200).json("user deleted")
            } catch (error) {
                res.status(500).json(error);
            }
        }
        else{
            res.status(403).json("access deny! you can only delete your profile")
        }
    
}
//following and followers

export const userFollow=async(req,res)=>{

    const id=req.params.id;        //my id 
    const {currentUserId}=req.body;         //the id of user that i want to follow

    if(currentUserId===id){
        res.status(403).json("forbidden")
    }

    else{

        try {
            const followUser=await UserModel.findById(id);
            const following=await UserModel.findById(currentUserId);

            if(!followUser.followers.includes(currentUserId)){

                await followUser.updateOne({$pull:{followers:currentUserId}})
                await following.updateOne({$pull:{following:id}})
                res.status(200).json("you are following")
            }

            else{
                res.status(403).json("you have already followed this user.")
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

//to unfollow user

export const unFollow=async(req,res)=>{

    const id=req.params.id;        //my id 
    const {currentUserId}=req.body;         //the id of user that i want to follow

    if(currentUserId===id){
        res.status(403).json("forbidden")
    }

    else{

        try {
            const followUser=await UserModel.findById(id);
            const following=await UserModel.findById(currentUserId);

            if(followUser.followers.includes(currentUserId)){

                await followUser.updateOne({$pull:{followers:currentUserId}})
                await following.updateOne({$pull:{following:id}})
                res.status(200).json("you are unfollowing")
            }

            else{
                res.status(403).json("you have not already followed this user.")
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

