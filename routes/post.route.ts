import { Router } from "express";
import { Route } from "../interfaces/routes.interface";
import { validationMiddleware } from "../middleware/validation.middleware";
import { CreatePostDto } from "../dtos/post.dto";
import PostController from "../controllers/post.controller";
import { authMiddleware } from "../middleware/auth.middleware";

export class PostRoutes implements Route {
  public router = Router();
  public path = "/post";

  public postController = new PostController();


  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      authMiddleware,
      validationMiddleware(CreatePostDto, "body"),
      this.postController.createPost
    );
  }
}