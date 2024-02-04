import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Conneted to MonogoDB")
}).catch((error)=>{
    console.log(error)
});

const app = express()

app.listen(3000,()=>{
    console.log("Server listening on port 3000")
})