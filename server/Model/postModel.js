import mongoose from "mongoose";

const PostSchema=new mongoose.Schema({
userId:{type:String,required:true,},
image:String,
Like:[],
desc:String
},
{
    timestamps:true
},)

const PostModel=mongoose.model("Posts",PostSchema)
export default PostModel;