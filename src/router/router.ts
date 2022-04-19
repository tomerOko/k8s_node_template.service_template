import express from "express";
import { userRoutes } from "./routes/usersRoutes";

const topRouter = express.Router()
topRouter.use('/users', userRoutes);

export {topRouter}