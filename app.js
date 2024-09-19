import express from "express";
import router from "./routes/user.js";
import {connectDB} from "./database/database.js"
import { config } from "dotenv";
const app = express();

//dot env config
config({
    path:'./database/config.env'
})

//database connection
connectDB();

//using Middlewares
app.use(express.json());
app.use(router)

app.listen(process.env.PORT, () => console.log(`listening on port https://localhost:${process.env.PORT}`))