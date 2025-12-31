import express, { NextFunction, Request, Response, Router } from "express";
import { postController } from "./post.controller";
import auth, { UserRole } from "../../middlewares/auth";
 
const router = express.Router();



router.post("/", auth(UserRole.ADMIN), postController.createPost);

export const postRouter: Router = router;
