import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import menuRouter from "./src/menu/routes/menu.routes.js";
import userRouter from "./src/users/routes/user.routes.js";

const configPath = path.resolve("config", "uat.env");
dotenv.config({ path: configPath });

const app = express();

const corsOptions = {
    origin:"*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))
app.use(express.json());

// app.get("/", ()=>{
//     console.log("hello")
//     return "Hello"
// });
app.use("/api/menu", menuRouter);
app.use("/api/user", userRouter);

export default app;