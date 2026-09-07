import { Response } from "express";

interface ErrorMassage extends Error {
  status?: number;
}

export const TryError = (message: string, status: number = 500) => {
  const err: ErrorMassage = new Error(message);
  err.status = status;
  return err;
};

export const CatchError = (
  error: unknown,
  res: Response,
  prodMessage: string = "Internal server error",
) => {
  if (error instanceof Error) {
    const message =
      process.env.NODE_ENV === "dev" ? error.message : prodMessage;
    const status = (error as ErrorMassage).status || 500;
    res.status(status).json({ message: error.message });
  }
};
