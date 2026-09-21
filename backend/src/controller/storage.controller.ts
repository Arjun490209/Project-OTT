import { Request, Response } from "express";
import { CatchError, TryError } from "../utils/error";
import {
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const conn = new S3Client({
  region: process.env.REGION,
  endpoint: `https://s3-${process.env.REGION}-amazonasw.com`,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const isExistFile = async (path: string) => {
  try {
    const command = new HeadObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: path,
    });
    await conn.send(command);
    return true;
  } catch (error) {
    return false;
  }
};

// ===================
//! upload file api controller
// ===================
export const uploadFile = async (req: Request, res: Response) => {
  try {
    const path = req.body?.path;
    const type = req.body?.type;

    if (!path || !type)
      throw TryError("Invalid request path and type require", 400);

    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: path,
      ContentType: type,
    });

    const url = await getSignedUrl(conn, command, { expiresIn: 60 });
    res.json({ url });
  } catch (error) {
    CatchError(error, res, "failed to generate Upload URL");
  }
};

// ===================
//! download file api controller
// ===================
export const downloadFile = async (req: Request, res: Response) => {
  try {
    const path = req.body?.path;
    if (!path)
      throw TryError(
        "failed to generate download url because path is missing.",
        400,
      );

    const isExist = isExistFile(path);
    if (!isExist) throw TryError("File don't exist");

    const command = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: path,
    });

    const url = await getSignedUrl(conn, command, { expiresIn: 60 });
    res.json({ url });
  } catch (error) {
    CatchError(error, res, "failed to generate download URL");
  }
};
