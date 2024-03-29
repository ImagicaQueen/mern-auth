import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Conneted to MonogoDB")
}).catch((error)=>{
    console.log(error)
});

const app = express()

app.use(express.json())

app.listen(3000,()=>{
    console.log("Server listening on port 3000")
})

app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
})