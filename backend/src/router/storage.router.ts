import { Router } from "express";
import { downloadFile, uploadFile } from "../controller/storage.controller";

const storageRouter = Router();

storageRouter.post("/upload", uploadFile);
storageRouter.post("/download", downloadFile);

export default storageRouter;
