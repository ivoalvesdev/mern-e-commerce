import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`server started on port ${port}`));
