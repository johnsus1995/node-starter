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

    this.router.get(
      `${this.path}`,
      authMiddleware,
      this.postController.fetchPost
    );

    this.router.get(
      `${this.path}/:id`,
      authMiddleware,
      this.postController.fetchPostById
    );

    this.router.put(
      `${this.path}/:id`,
      authMiddleware,
      validationMiddleware(CreatePostDto, "body"),
      this.postController.updatePost
    );
    this.router.delete(
      `${this.path}/:id`,
      authMiddleware,
      this.postController.deletePost
    );
  }
}