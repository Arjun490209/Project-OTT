import { Request, Response } from "express";
import User from "../model/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { CatchError, TryError } from "../utils/error";

interface PayloadInterface {
  id: mongoose.Types.ObjectId;
  fullName: string;
  email: string;
  mobile: string;
}

const accessTokenExpiry = "10d";

// ===================
//! signup api controller
// ===================
const generateToken = async (payload: PayloadInterface) => {
  const accessToken = await jwt.sign(payload, process.env.AUTH_SECRET!, {
    expiresIn: accessTokenExpiry,
  });
  return accessToken;
};

export const signup = async (req: Request, res: Response) => {
  try {
    await User.create(req.body);
    res.status(200).json({ message: "sign up successfully" });
  } catch (error: unknown) {
    CatchError(error, res);
  }
};

// ===================
//! Login api controller
// ===================
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) throw TryError("user not found, please try first signup.", 404);

    const isLogin = await bcrypt.compare(password, user.password);

    if (!isLogin) throw TryError("Invalid credentials.", 401);

    const payload = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      mobile: user.mobile,
    };

    const options = {
      httpOnly: true,
      maxAge: 10 * 60 * 1000,
      secure: false,
    };
    const token = await generateToken(payload);

    res.cookie("accessToken", token, options);

    res.json({ message: "Login successfully" });
  } catch (error: unknown) {
    CatchError(error, res);
  }
};
