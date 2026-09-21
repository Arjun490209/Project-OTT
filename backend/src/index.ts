import dotenv from "dotenv";
dotenv.config();

import express from "express";
import dbConnect from "./config/db";
dbConnect();
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./router/auth.router";
import storageRouter from "./router/storage.router";
import AuthMiddleware from "./middleware/auth.middleware";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);
app.use("/storage", AuthMiddleware, storageRouter);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Server running port ${process.env.PORT}`),
);
