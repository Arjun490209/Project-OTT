import express from "express";
import {
  forgetPassword,
  getSession,
  login,
  signup,
} from "../controller/auth.controller";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("forget-password", forgetPassword);
authRouter.get("/session", getSession);

export default authRouter;
