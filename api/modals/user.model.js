import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : String,
    required :true,
    unique:true,
},
{
    email : String,
    required :true,
    unique:true,
},
{
    password : String,
    required :true,
},{timestamp:true});

const User = mongoose.model("User",userSchema)

export default User;