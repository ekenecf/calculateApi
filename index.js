import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import mongoose from "mongoose";
import calculateRoute from "./routes/calculate.js";

dotenv.config({path: "./utils/.env"});
const app = express();
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Successfully connected to mongoose"));

app.use(express.json());
app.use(cors())


app.use("/", calculateRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT, () => {
  console.log("connected ");
});
