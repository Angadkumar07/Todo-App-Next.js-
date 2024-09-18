import express from "express";
import router from "./routes/user.js";
const app = express();
const port = 3000;

//using Middlewares
app.use(express.json());
app.use(router)

app.listen(port, () => console.log(`listening on port https://localhost:${port}`))