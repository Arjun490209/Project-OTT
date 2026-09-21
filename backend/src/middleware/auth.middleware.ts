import { NextFunction, Request, Response } from "express";
import { CatchError, TryError } from "../utils/error";
import jwt, { JwtPayload } from "jsonwebtoken";
import mongoose from "mongoose";

export interface PayloadInterface {
  id: mongoose.Types.ObjectId;
  fullName: string;
  email: string;
  mobile: string;
}

export interface SessionInterface extends Request {
  session?: PayloadInterface;
}

const AuthMiddleware = async (
  req: SessionInterface,
  res: Response,
  next: NextFunction,
) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) throw TryError("Unauthorized Token", 401);

    const payload = (await jwt.verify(
      accessToken,
      process.env.AUTH_SECRET!,
    )) as JwtPayload;

    req.session = {
      id: payload.id,
      email: payload.email,
      fullName: payload.fullName,
      mobile: payload.mobile,
    };

    next();
  } catch (error) {
    CatchError(error, res, "Unauthorized");
  }
};

export default AuthMiddleware;
