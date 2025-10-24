import express from "express";

import cors from "cors"

import noteRouter from "./routers/noteRouter.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/ratelimiter.js";


dotenv.config();

console.log(process.env.MONGO_URL)

const app =  express();

// connectDB();

// middleware

app.use(cors({
  origin:"http://localhost:5173"
}))
app.use(express.json());

app.use(ratelimiter);


app.use("/api/v1/notes", noteRouter);

const PORT = process.env.PORT || 5001;

// app.listen(port,  ()=>{
    // console.log("Server is running on port", port)
// })
connectDB().then(()=>{
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
});


// hpbZRMpCkDu7LM9w

// mongodb+srv://abioyeakanmu259_db_user:hpbZRMpCkDu7LM9w@cluster0.7hfvoas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://abioyeakanmu259_db_user:<db_password>@cluster0.7hfvoas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// keVcq6QeO2qPC3h9

// mongodb+srv://abioyehusean2019_db_user:keVcq6QeO2qPC3h9@cluster0.on77ysu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0