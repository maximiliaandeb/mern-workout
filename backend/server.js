import express from "express";
import dotenv from "dotenv";
import workoutRouter from "./route/workoutRoutes.js";
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/workouts", workoutRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT, 'and database');
    });
  })
  
  .catch((error) => {
    console.log(error);
  });
