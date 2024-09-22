import express from "express";
import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/task.js"
import {connectDB} from "./database/database.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
const app = express();

//dot env config
config({
    path:'./database/config.env'
})

//database connection
connectDB();

//using Middlewares
app.use(express.json());
app.use(cookieParser())

//using api routes
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/task",taskRoutes);

app.listen(process.env.PORT, () => console.log(`listening on port https://localhost:${process.env.PORT}`))